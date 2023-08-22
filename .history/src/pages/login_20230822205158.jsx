import Link from 'next/link';
import LoginForm from '../components/Auth/LoginForm';

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don not have an account?{' '}
              <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
