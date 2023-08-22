import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuthentication } from '../api/auth'; // Import your API functions
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
    <div>
      <h2>Dashboard</h2>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default DashboardPage;
