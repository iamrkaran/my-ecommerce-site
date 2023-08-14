import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (email !== userData.email || password !== userData.password) {
      setError("Invalid email or password");
      return;
    }
    try {
      await dispatch(login(email, password));
      setFormData({
        email: "",
        password: "",
      });
      setError("");

      // Save user data to local storage and set isLoggedIn to true
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, isLoggedIn: true })
      );
      dispatch({ type: "auth/setIsLoggedIn", payload: true });
      <Navigate to="/" />;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Log in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full px-4 py-2 rounded-lg border-gray-300"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input w-full px-4 py-2 rounded-lg border-gray-300"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
