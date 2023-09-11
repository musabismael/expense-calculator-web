// pages/index.js
import { useAuth } from '../context/c';

function HomePage() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, you are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please sign in:</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
