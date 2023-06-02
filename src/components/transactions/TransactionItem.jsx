import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState();

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button
                    onClick={() => {
                        deleteTransaction(transaction.id);
                    }}
                    className="bg-indigo-700 text-white px-2 rounded-md ml-2 transition ease-in-out delay-75 hover:bg-indigo-600"
                >
                    x
                </button>
            </div>
        </li>
    );
}
