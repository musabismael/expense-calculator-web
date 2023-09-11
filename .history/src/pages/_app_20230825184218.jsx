import Layout from './layout';
import { AuthProvider } from '../components/';
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
