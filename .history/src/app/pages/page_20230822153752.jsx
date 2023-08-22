import '../styles/globals.css';
import { AppProvider } from '../context/AppContext'; // Import your AppProvider for managing authentication state
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

function page({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
