import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuthentication } from '../api/auth'; // Import your API functions
import ProtectedRoute from '../components/ProtectedRoute'; // Import your ProtectedRoute component
import ExpenseList from '../components/Expense/ExpenseList';
import ExpenseForm from '../components/Expense/ExpenseForm';

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const isAuthenticated = await checkAuthentication(); // Check user's authentication status
        if (!isAuthenticated) {
          router.push('/login'); // Redirect to login page if not authenticated
        }
      } catch (error) {
        // Handle error (show error message, etc.)
      }
    };

    authenticateUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ProtectedRoute>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Expense Calculator</h2>
          <ExpenseForm />
          <ExpenseList />
        </div>
      </ProtectedRoute>
    </div>
  );
}

export default DashboardPage;
