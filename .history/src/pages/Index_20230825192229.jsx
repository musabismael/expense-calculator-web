import Link from "next/link";
import { useAuth } from '../components/context/AuthContext';

function HomePage() {
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-10 w-1/3">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="logo-animation h-16 w-16 mr-2"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Welcome to the Expense Calculator
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Manage your expenses efficiently with our simple and user-friendly
            expense calculator application.
          </p>
          <div className="space-y-4">
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Register
            </Link>
          </div>
          <div className="mt-8 text-gray-500 text-center">
            <p>
              &copy; {new Date().getFullYear()} Expense Calculator. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    );
 
}

export default HomePage;
