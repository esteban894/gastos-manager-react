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

    let updatedAmount = +amount;

    if (selectedOption === "gastoN" || selectedOption === "gastoIn") {
      updatedAmount *= -1;
    }

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      typeAmount: selectedOption,
      amount: updatedAmount,
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
        <h3>Tipo de transacción</h3>
        <div className="flex justify-evenly flex-col md:flex-row">
          <label
            className={`inline-flex py-2 md:py-1 md:px-0 md:w-20 2xl:px-0 2xl:w-32 items-center ${
              selectedOption === "ingreso" ? "bg-green-500" : "bg-gray-400"
            } rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="ingreso"
              checked={selectedOption === "ingreso"}
              onChange={() => setSelectedOption("ingreso")}
            />
            <span className="ml-2 text-sm">Ingreso</span>
          </label>
          <label
            className={`inline-flex py-2 md:py-1 md:px-0 md:w-20 2xl:px-0 2xl:w-32 items-center ${
              selectedOption === "gastoN" ? "bg-amber-500" : "bg-gray-400"
            } rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="gastoN"
              checked={selectedOption === "gastoN"}
              onChange={() => setSelectedOption("gastoN")}
            />
            <span className="ml-2 text-sm">Gasto necesario</span>
          </label>
          <label
            className={`inline-flex py-2 md:py-1 md:px-0 md:w-20 2xl:px-0 2xl:w-32 items-center ${
              selectedOption === "gastoIn" ? "bg-red-600" : "bg-gray-400"
            } rounded my-3 hover:cursor-pointer`}>
            <input
              type="radio"
              name="amountType"
              className="appearance-none"
              value="gastoIn"
              checked={selectedOption === "gastoIn"}
              onChange={() => setSelectedOption("gastoIn")}
            />
            <span className="ml-2 text-sm">Gasto innecesario</span>
          </label>
        </div>
        <button
          className={
            description && selectedOption && amount !== 0
              ? "bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full transition ease-in-out delay-75 hover:bg-indigo-600"
              : "bg-indigo-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          }
          disabled={!description || selectedOption === "" || amount == 0}>
          Añade una transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
