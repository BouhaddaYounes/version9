import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="1200652 DA"
        pillText="2.23"
        trend="up"
        period="From Jan 1 - Mars 31"
      />
      <Card
        title="Average Station Revenue"
        value="15000 DA"
        pillText="1.15"
        trend="up"
        period="From Jan 1 - Mars 31"
      />
      <Card
        title="Trailing Year"
        value="7526158 DA"
        pillText="0.87"
        trend="down"
        period="Previous 365 days"
      />
    </>
  );
};

export default StatCards;
const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return (
    <div className="col-span-4 p-4 rounded border border-stone-300">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>
        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>
      </div>
      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
