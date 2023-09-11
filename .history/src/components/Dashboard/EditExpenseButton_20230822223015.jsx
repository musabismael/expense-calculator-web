function EditExpenseButton({ onEdit }) {
    return (
      <button
        onClick={onEdit}
        className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-yellow-600 focus:outline-none focus:ring"
      >
        Edit
      </button>
    );
  }
  
  export default EditExpenseButton;
  