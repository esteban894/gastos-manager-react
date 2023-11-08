import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const inputAmount = document.getElementById("inputAmount");

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });

    setAmount(0);
    setDescription("");
    setSelectedOption("");
    inputAmount.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          step="0.1"
          id="inputAmount"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <div className="flex justify-evenly">
          <label
            className={`inline-flex items-center ${
              selectedOption === "ingreso" ? "bg-green-500" : "bg-gray-400"
            } p-2 rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="ingreso"
              onChange={() => setSelectedOption("ingreso")}
            />
            <span className="ml-2 text-sm">Ingreso</span>
          </label>
          <label
            className={`inline-flex items-center ${
              selectedOption === "gastoN" ? "bg-amber-500" : "bg-gray-400"
            } p-2 rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="gastoN"
              onChange={() => setSelectedOption("gastoN")}
            />
            <span className="ml-2 text-sm">Gasto necesario</span>
          </label>
          <label
            className={`inline-flex items-center ${
              selectedOption === "gastoIn" ? "bg-red-600" : "bg-gray-400"
            } p-2 rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="gastoIn"
              onChange={() => setSelectedOption("gastoIn")}
            />
            <span className="ml-2 text-sm">Gasto innecesario</span>
          </label>
        </div>
        <button
          className={
            description && selectedOption
              ? "bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full transition ease-in-out delay-75 hover:bg-indigo-600"
              : "bg-indigo-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          }
          disabled={!description}>
          Añade una transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
