import Link from 'next/link';
import RegistrationForm from '../components/Auth/RegistrationForm';

function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-1/3">
        <div className="flex justify-center items-center mb-6">
          <img src="/images/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
          <h2 className="text-2xl font-bold">Expense Calculator</h2>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <RegistrationForm />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
