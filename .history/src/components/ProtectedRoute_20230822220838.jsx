import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Import your authentication context

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
