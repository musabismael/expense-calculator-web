import { useState } from 'react';
import { useRouter } from 'next/router';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Simulate login by delaying for a few seconds
      // Replace this with your actual login logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear form inputs and show success message
      setEmail('');
      setPassword('');
      setError(null);

     
      axios.post('/auth/login', { username, password })
      .then(response => {
        console.log(response.data);
        console.log('Login successful!');
        router.push('/dashboard');
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });

    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
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
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
  