import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExpenseDateRangePicker({ startDate, endDate, onDateRangeChange }) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Select Date Range</h3>
      <div className="flex">
        <DatePicker
          selected={startDate}
          onChange={(date) => onDateRangeChange('start', date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="border border-gray-300 rounded-md py-2 px-4 w-full mr-2"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => onDateRangeChange('end', date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
        />
      </div>
    </div>
  );
}

export default ExpenseDateRangePicker;
