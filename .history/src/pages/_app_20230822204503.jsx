import '../styles/globals.css';
import PageLayout from './Layout';

function m({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
