import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../reducers/authSlice';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await dispatch(register(name, email, password));
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setError('');
  
      // Save user data to local storage
      const userData = {
        name,
        email,
        password,
      };
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create an account</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input w-full px-4 py-2 rounded-lg border-gray-300"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
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
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input w-full px-4 py-2 rounded-lg border-gray-300"
              value={formData.confirmPassword}
                onChange={handleChange}
            />
            </div>
            <div className="flex justify-between items-center">
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                >
                    Register
                </button>
                <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                    Already have an account?
                </Link>
            </div>
        </form>
        </div>
    </div>
    );
};

export default Register;