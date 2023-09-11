import '../styles/globals.css';
import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default App;
