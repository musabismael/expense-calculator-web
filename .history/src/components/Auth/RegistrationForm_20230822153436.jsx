import { useState } from 'react';
import { registerUser } from '../../api/auth'; // Import your API functions

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      // Handle registration error (show error message, etc.)
    }
  };

  return (
    <form className="p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
