import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  fetchLoyers,
  selectLoyers,
  selectLoyersLoading,
  selectLoyersError,
} from '../../redux/slices/loyerSlice';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import FormDialog from "../../components/FormDialog";
import ModifyLoyer from "../../components/ModifyLoyer";

const Locaux: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loyers = useSelector(selectLoyers);
  const loading = useSelector(selectLoyersLoading);
  const error = useSelector(selectLoyersError);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchLoyers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns: GridColDef[] = [
    { 
      field: "CODE_LOYER", 
      headerName: "CODE LOYER", 
      width: 120 
    },
    {
      field: "CODE_STATION",
      headerName: "CODE STATION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "SURFACE",
      headerName: "SURFACE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "MONTANT",
      headerName: "MONTANT",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ETAT",
      headerName: "ETAT",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        const etatText = row.ETAT === 2 ? "Occupé" : row.ETAT === 1 ? "Libre" : "Autre";
        return (
          <Box
            sx={{
              textAlign: "center",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              margin: "7.5px",
              backgroundColor:
                etatText === "Occupé"
                  ? "red"
                  : etatText === "Libre"
                  ? theme.palette.primary.dark
                  : theme.palette.secondary.dark,
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {etatText}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "ACTION",
      headerName: "ACTION",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({row}) => {
        return <ModifyLoyer loyer={row} />;
      },
    },
  ];

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
                <p className="pt-2 text-2xl font-bold">LOCAUX</p>
                <Box flexGrow={1} />
                <FormDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto" }}>
        <DataGrid
          rows={loyers}
          columns={columns}
          getRowId={(row) => row.CODE_LOYER}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default Locaux;
