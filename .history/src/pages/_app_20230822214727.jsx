import '../styles/globals.css';
import PageLayout from './layout';

function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default Home;
