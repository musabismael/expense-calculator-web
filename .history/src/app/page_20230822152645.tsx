import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Expense Calculator</h1>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}

export default <Page></Page>;
