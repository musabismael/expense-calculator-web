import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <Layout className='bg-red-500' >
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
