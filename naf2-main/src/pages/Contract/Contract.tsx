import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
// import { rows } from "../../data/datacontract";
// import ModifyLocal from "../../components/ModifyLocal";
import ModifyContract from "../../components/ModifyContract";
import FormDialogContract from "../../components/FormDialogContract";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store"; // Adjust the path if needed
// Update the import path below if your contractSlice file is located elsewhere
import { fetchContracts, selectContracts, selectContractsLoading } from "../../redux/slices/contractSlice";
const Contract = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contrats = useSelector(selectContracts) as any[];
  const loading = useSelector(selectContractsLoading);

  useEffect(() => {
    dispatch(fetchContracts());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "ID", headerName: "ID", width: 80 },
    {
      field: "NUM",
      headerName: "NUM",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "CODE_OPERATEUR",
      headerName: "CODE OPERATEUR",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    // {
    //   field: "OBJET",
    //   headerName: "TYPE LOYER",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    // },
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
       renderCell: (row) => {
        return <ModifyContract contractId={Number(row.id)} />;
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
              className="flex"
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                <p className="pt-2 text-2xl font-bold">CONTRACT</p>
                <Box flexGrow={1} />
                <FormDialogContract />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto" }}>
        <DataGrid
          rows={contrats}
          columns={columns}
          getRowId={(row) => row.ID} 
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
