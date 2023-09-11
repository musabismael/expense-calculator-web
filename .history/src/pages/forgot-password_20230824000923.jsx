// pages/forgot-password.js
import React from "react";

function ForgotPasswordPage() {
  const handleResetPassword = () => {
    // Implement logic to send a reset password email to the user
    // You might call an API to initiate the password reset process
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <p className="mb-4">
          Enter your email address below. We will send you instructions on how to reset your password.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
