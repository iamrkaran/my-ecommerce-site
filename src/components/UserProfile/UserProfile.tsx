import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { logout } from '../../reducers/authSlice';
import LogoutButton from '../CheckoutForm/LogoutButton';

const UserProfile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
      <div className="mt-8">
        {user && (
          <>
            <p>
              <span className="font-bold">Name: </span>
              {user.name}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="font-bold">Order History: </span>
              {user.orderHistory}
            </p>
          </>
        )}
      </div>

      <LogoutButton />
    </div>
  );
};

export default UserProfile;
