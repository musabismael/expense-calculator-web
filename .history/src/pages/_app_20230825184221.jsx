import Layout from './layout';
import { AuthProvider } from '../components/context/';
function App({ Component, pageProps }) {
  return (
    <AuthProvider>

    <Layout >
      <Component  {...pageProps} />
    </Layout>
    </AuthProvider>

  );
}

export default App;
