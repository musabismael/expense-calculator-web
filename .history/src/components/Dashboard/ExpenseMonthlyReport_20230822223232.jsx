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

function ExpenseMonthlyReport({ expenses }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Monthly Expense Report</Text>
        {expenses.map((monthData) => (
          <div key={monthData.month}>
            <Text style={styles.text}>{monthData.month}</Text>
            <Text style={styles.text}>Total Expenses: ${monthData.total}</Text>
          </div>
        ))}
      </Page>
    </Document>
  );
}

export default ExpenseMonthlyReport;
