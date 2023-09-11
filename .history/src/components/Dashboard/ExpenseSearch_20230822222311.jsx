function ExpenseSearch({ onSearch }) {
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Search Expenses</h3>
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Search expenses..."
          onChange={onSearch}
        />
      </div>
    );
  }
  
  export default ExpenseSearch;
  