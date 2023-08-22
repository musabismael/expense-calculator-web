import Link from 'next/link';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Expense Calculator</h1>
      <p className="text-gray-600 mb-6">
        Manage your expenses efficiently with our simple and user-friendly expense calculator application.
      </p>
      <div className="space-y-4">
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
          <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</Link>
      </div>
      <div className="mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Expense Calculator. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;
