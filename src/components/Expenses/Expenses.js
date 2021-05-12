import ExpenseItem from './Item';
import './Expenses.css';

const ExpenseExpenses = (props) =>
{
  return(
    <ExpenseItem
      title={props.exp.title}
      amount={props.exp.amount}
      date={props.exp.date}
    />
  );
}

export default ExpenseExpenses;
