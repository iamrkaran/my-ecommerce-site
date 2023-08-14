import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout action creator to set the user to null in the store
    dispatch(logout());

    // Remove user data from local storage
    // localStorage.removeItem('user');

    // Set isloggedin to false in local storage
    localStorage.setItem('isloggedin', 'false');

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <button
      className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
