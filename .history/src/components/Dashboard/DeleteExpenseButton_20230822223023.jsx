function DeleteExpenseButton({ onDelete }) {
    return (
      <button
        onClick={onDelete}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring"
      >
        Delete
      </button>
    );
  }
  
  export default DeleteExpenseButton;
  