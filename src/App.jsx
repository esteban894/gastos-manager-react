import { GlobalProvider } from "./context/GlobalState";

import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import PieChart from "./components/PieChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto sm:w-full xl:w-3/6">
          <div className="bg-zinc-800 sm:min-h-[30rem] p-10 rounded-lg flex gap-x-2 flex-col md:flex-row">
            <div className="w-full">
              <h1 className="text-2xl font-bold">Administrador de gastos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <PieChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
