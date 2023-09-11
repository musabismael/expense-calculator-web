import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <Layout className="custom-main">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
