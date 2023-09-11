import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

function ExpenseDateRangeReport({ startDate, endDate, expenses }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Expense Report ({startDate} - {endDate})</Text>
        {expenses.map((expense) => (
          <div key={expense.id}>
            <Text style={styles.text}>Date: {expense.date}</Text>
            <Text style={styles.text}>Description: {expense.description}</Text>
            <Text style={styles.text}>Amount: ${expense.amount}</Text>
            <Text style={styles.text}>Category: {expense.category}</Text>
          </div>
        ))}
        <Text style={styles.text}>Total Expenses: ${calculateTotalExpenses(expenses)}</Text>
      </Page>
    </Document>
  );
}

function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export default ExpenseDateRangeReport;
