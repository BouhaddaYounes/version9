import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  fetchOperateurs,
  selectOperateurs,
  selectOperateursLoading,
  selectOperateursError,
} from '../../redux/slices/operateurSlice';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import FormDialog from "../../components/FormDialog";
import ModifyOperateur from "../../components/ModifyOperateur";

const Colaborator: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const operateurs = useSelector(selectOperateurs);
  const loading = useSelector(selectOperateursLoading);
  const error = useSelector(selectOperateursError);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchOperateurs());
  }, [dispatch]);

  if (loading) {
    return <div className="p-4">Loading operateurs...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  if (!operateurs || operateurs.length === 0) {
    return <div className="p-4">No operateurs data available</div>;
  }

  const columns: GridColDef[] = [
    { 
      field: "CODE_OPERATEUR", 
      headerName: "CODE OPERATEUR", 
      width: 120
    },
    {
      field: "RAISON_SOCIALE",
      headerName: "RAISON SOCIALE",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "ADRESSE",
      headerName: "ADRESSE",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "TEL",
      headerName: "TELEPHONE",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "BANQUE",
      headerName: "BANQUE",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "NIF",
      headerName: "NIF",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "ACTION",
      headerName: "ACTION",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({row}) => {
        return <ModifyOperateur operateur={row} />;
      },
    },
  ];

  return (
    <div>
      <div className="rounded-lg pb-4 shadow">
        <div className="px-1 grid gap-3 grid-cols-12">
          <div className="col-span-12 h-20 p-4 rounded border border-stone-700">
            <div
              className="flex"
              style={{
                color: theme.palette.primary.dark,
              }}
            >
              <p className="pt-2 text-2xl font-bold">OPERATEURS</p>
              <Box flexGrow={1} />
              <FormDialog />
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto", mt: 2 }}>
        <DataGrid
          rows={operateurs}
          columns={columns}
          getRowId={(row) => row.CODE_OPERATEUR}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
        />
      </Box>
    </div>
  );
};

export default Colaborator;
