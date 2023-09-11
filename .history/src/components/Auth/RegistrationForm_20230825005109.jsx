import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate registration by delaying for a few seconds
      // Replace this with your actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear form inputs and show success message
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError(null);
      axios.post('/auth/register', { username, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error registering:', error);
      });
   

    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <button
          type="submit"
          className={`w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
