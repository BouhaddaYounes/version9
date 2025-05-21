import { useTheme } from "@mui/material";

const Facture = () => {
  const theme = useTheme();
  return (
    <>
      <div>
        <div className="rounded-lg pb-4 shadow">
          <div className=" px-4 grid gap-3 grid-cols-12">
            <div className="col-span-12 h-20 p-4 rounded border border-stone-700">
              <div
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                <p className="pt-2 text-2xl font-bold">FACTURE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facture;
