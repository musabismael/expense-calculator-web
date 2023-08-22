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
    <form className="p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
