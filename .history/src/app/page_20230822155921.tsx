import Link from 'next/link';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <div className="bg-opacity-75 bg-gray-100 p-8 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center text-gray-900">Welcome to the Expense Calculator</h1>
        <p className="text-gray-700 mb-6 text-center">
          Manage your expenses efficiently with our simple and user-friendly expense calculator application.
        </p>
        <div className="space-y-4 flex flex-col items-center">
          <Link href="/login">
            <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
          </Link>
          <Link href="/register">
            <Link className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</Link>
          </Link>
        </div>
        <div className="mt-8 text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Expense Calculator. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
