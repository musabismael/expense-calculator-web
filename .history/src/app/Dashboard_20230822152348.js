import ExpenseList from './components/Expense/ExpenseList';
import ExpenseForm from './components/Expense/ExpenseForm';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default Dashboard;
