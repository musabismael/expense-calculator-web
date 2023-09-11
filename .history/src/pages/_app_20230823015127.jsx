import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <Layout className="p-4 m-2">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
