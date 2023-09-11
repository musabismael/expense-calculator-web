// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isTokenValid } from '../path/to/tokenUtils';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Fetch token from storage

    if (token) {
      const tokenIsValid = isTokenValid(token);

      if (tokenIsValid) {
        router.push('/dashboard'); // Redirect to dashboard if token is valid
      } else {
        router.push('/index'); // Redirect to login if token is invalid
      }
    } else {
      router.push('/login'); // Redirect to login if no token is found
    }
  }, []);

  return <div>Checking token and redirecting...</div>;
}
