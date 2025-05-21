import { useTheme } from "@mui/material";
import ActivityGraph from "../../components/ActivityGraph";
import StatCards from "../../components/StatCards";
import TopCol from "../../components/TopCol";
import UsageRadar from "../../components/UsageRadar";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <>
      <div>
        <div className="rounded-lg pb-4 shadow">
          <div className=" px-4 grid gap-3 grid-cols-12">
            <div className="col-span-12 h-20 p-4 rounded border border-stone-300">
              <div
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                <p className="pt-2 text-2xl font-bold">DASHBOARD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg pb-4 shadow">
        <div className=" px-4 grid gap-3 grid-cols-12">
          <StatCards />
          <ActivityGraph />
          <UsageRadar />
          <TopCol />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
