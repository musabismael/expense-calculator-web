import Layout from './layout';

function App({ Component, pageProps }) {
  return (
    <Layout >
 <div className="flex flex-col space-y-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Expense Overview</h2>
          <ExpenseChart data={chartData} />
        </section>
        {/* Other sections */}
      </div>
          </Layout>
  );
}

export default App;
