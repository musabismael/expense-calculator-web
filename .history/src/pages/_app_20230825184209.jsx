import Layout from './layout';
impo
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
