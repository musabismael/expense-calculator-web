import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., send login request to the server)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
