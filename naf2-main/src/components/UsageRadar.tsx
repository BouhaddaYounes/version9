import { PieChart } from "@mui/x-charts/PieChart";
import { FiEye } from "react-icons/fi";

const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Monthly Revenue
        </h3>
      </div>
      <div className="h-85 px-4 pt-10 mt-10">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 150000, label: "WC" },
                { id: 1, value: 1050000, label: "La vage" },
                { id: 2, value: 2000000, label: "superete" },
                { id: 3, value: 900000, label: "resteraunt" },
                { id: 4, value: 450000, label: "Parking" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default UsageRadar;
