import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../../data/datacontract";
import ModifyLocal from "../../components/ModifyLocal";
import ModifyContract from "../../components/ModifyContract";

const Contract = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "NUM",
      headerName: "NUM",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "OPERATEURS",
      headerName: "OPERATEURS",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "OBJET",
      headerName: "OBJET",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "DATE_VIGEUR",
      headerName: "DATE VIGEUR",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "DATE_FIN",
      headerName: "DATE FIN",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ACTION",
      headerName: "ACTION",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({}) => {
        return <ModifyContract />;
      },
    },
  ];
  const theme = useTheme();
  return (
    <>
      <div>
        <div className="rounded-lg pb-4 shadow">
          <div className=" px-1 grid gap-3 grid-cols-12">
            <div className="col-span-12 h-20 p-4 rounded border border-stone-700">
              <div
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                <p className="pt-2 text-2xl font-bold">CONTRACT</p>
                //drtfyg//
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          showToolbar
        />
      </Box>
    </>
  );
};

export default Contract;
