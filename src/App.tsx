import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "", amount: 0, category: "" },
  ]);

  const visibleCategory = categoryFilter
    ? expenses.filter((e) => e.category === categoryFilter)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setCategoryFilter(category)}
      />
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
