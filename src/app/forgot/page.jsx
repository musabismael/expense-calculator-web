"use client"
import React, { useState } from "react";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      // Send a request to your backend to initiate the password reset process
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResetSent(true);
      } else {
        // Handle error response
        console.error("Failed to initiate password reset");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {resetSent ? (
          <p className="text-green-500 mb-4">
            Reset instructions sent to your email. Please check your inbox.
          </p>
        ) : (
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
