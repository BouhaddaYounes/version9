import ActivityGraph from "./ActivityGraph";
import StatCards from "./StatCards";
import TopCol from "./TopCol";
import UsageRadar from "./UsageRadar";

const Grid = () => {
  return (
    <div className=" px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <TopCol />
    </div>
  );
};

export default Grid;
