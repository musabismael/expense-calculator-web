import Layout from './layout';

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
