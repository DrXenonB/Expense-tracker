import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  const visibleCategory = categoryFilter
    ? expenses.filter((e) => e.category === categoryFilter)
    : expenses;

  return (
    <>
      <div className="card mx-5 mt-4">
        <div className="card-header text-center">Expense Tracker</div>
        <div className="card-body">
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(expense) =>
                setExpenses([
                  ...expenses,
                  { ...expense, id: expenses.length + 1 },
                ])
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
        </div>
      </div>
    </>
  );
}

export default App;
