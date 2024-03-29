import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">Historial</h3>
      <ul className="h-32 md:h-40 overflow-y-scroll">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
