import ProtectedRoute from '../components/ProtectedRoute';
import ExpenseList from '../components/Expense/ExpenseList';
import ExpenseForm from '../components/Expense/ExpenseForm';

function SecurePage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ProtectedRoute>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Secure Page</h2>
          <ExpenseForm />
          <ExpenseList />
        </div>
      </ProtectedRoute>
    </div>
  );
}

export default SecurePage;
    