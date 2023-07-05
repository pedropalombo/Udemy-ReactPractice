import ExpenseItem from "./components/ExpenseItem";
import ExpenseRender from "./components/ExpenseRender";

function App() {
  const expenses = [
    {
      id: '1',
      title: 'Master Blaster Omega',
      amount: 1000.34,
      date: new Date(1960, 1, 4)
    },
    {
      id: '20',
      title: 'Judgement GT',
      amount: 3500.20,
      date: new Date(2002, 1, 20)
    },
    {
      id: '303',
      title: 'Third Prince XR',
      amount: 3014.16,
      date: new Date(1696, 8, 6)
    },
    {
      id: '4040',
      title: 'Ford Panamera',
      amount: 2077.42,
      date: new Date(2009, 3, 20)
    },
    {
      id: '55555',
      title: 'Interstellar Punk',
      amount: 555.55,
      date: new Date(2005, 4, 5)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>anatha won</p>

      {/* can't parse + show components (aka expenses.forEach()) for some reason */}
      <ExpenseRender expenses={expenses} />
    </div>
  );
}

export default App;
