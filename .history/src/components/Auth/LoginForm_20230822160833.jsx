import { useState } from 'react';
import { loginUser } from '../../api/auth'; // Import your API functions

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email, password });
      // Handle successful login (e.g., store token and redirect to dashboard)
    } catch (error) {
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <form className="bg-white rounded shadow-md p-6 w-full max-w-xs" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border rounded placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 border rounded placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
