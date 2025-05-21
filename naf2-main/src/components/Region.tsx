import { FiUser } from "react-icons/fi";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    2025: 4000,
    2024: 2400,
    amt: 2400,
  },
  {
    name: "Fabruary",
    2025: 3000,
    2024: 1398,
    amt: 2210,
  },
  {
    name: "Mars",
    2025: 2000,
    2024: 9800,
    amt: 2290,
  },
  {
    name: "April",
    2025: 2780,
    2024: 3908,
    amt: 2000,
  },
  {
    name: "Mai",
    2025: 1890,
    2024: 4800,
    amt: 2181,
  },
  {
    name: "June",
    2025: 2390,
    2024: 3800,
    amt: 2500,
  },
  {
    name: "July",
    2025: 3490,
    2024: 4300,
    amt: 2100,
  },
];

const Region = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Monthly Revenue
        </h3>
      </div>
      <div className="h-85 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="2024"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="2025"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Region;
