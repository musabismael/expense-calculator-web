import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <Layout >
      <Component className="p-4 m-2" {...pageProps} />
    </Layout>
  );
}

export default App;
