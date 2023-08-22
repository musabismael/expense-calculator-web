import '../styles/globals.css';
import PageLayout from './Layout';

function Home({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default Home;
