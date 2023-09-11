import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <AuthProvider>

    <Layout >
      <Component  {...pageProps} />
    </Layout>
  );
}

export default App;
