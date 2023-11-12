import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useGlobalState } from "../context/GlobalState";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const { transactions } = useGlobalState();

  const incomes = transactions
    .map((transaction) => (transaction.typeAmount == "ingreso" ? transaction.amount : 0))
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const gastosN = transactions
    .map((transaction) => (transaction.typeAmount == "gastoN" ? transaction.amount : 0))
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  const gastosIn = transactions
    .map((transaction) => (transaction.typeAmount == "gastoIn" ? transaction.amount : 0))
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  const data = {
    labels: ["Ingresos", "Gastos Necesarios", "Gastos Innecesarios"],
    datasets: [
      {
        data: [incomes, gastosN, gastosIn],
        borderColor: "transparent",
        backgroundColor: ["#22C55E", "#F59E0B", "#DC2626"],
      },
    ],
  };
  const options = {};
  return (
    <div>
      <div className="mx-auto w-[80%] aspect-square">
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
}

export default PieChart;
