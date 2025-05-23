import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  fetchStations,
  selectStations,
  selectStationsLoading,
  selectStationsError,
} from '../../redux/slices/stationSlice';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import FormDialog from "../../components/FormDialog";
// import ModifyClient from "../../components/ModifyClient";
import ModifyStation from "../../components/Modifystation";

const Station: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stations = useSelector(selectStations);
  const loading = useSelector(selectStationsLoading);
  const error = useSelector(selectStationsError);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns: GridColDef[] = [
    { 
      field: "CODE_STATION", 
      headerName: "CODE STATION", 
      width: 120 
    },
    {
      field: "NOM_STATION",
      headerName: "NOM STATION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "TYPE_ACTIVITE",
      headerName: "ACTIVITE",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        let activityText;
        if (row.NBR_loyer === 0) {
          activityText = "ABS";
        } else {
          activityText = row.TYPE_ACTIVITE === 1 ? "HF" : "ABS";
        }
        return (
          <Typography
            sx={{
              color: activityText === "HF" ? "green" : "red",
              fontWeight: "bold"
            }}
          >
            {activityText}
          </Typography>
        );
      },
    },
    {
      field: "Wilaya",
      headerName: "WILAYA",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "NBR_loyer",
      headerName: "NBR BOUTIQUE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ETATS",
      headerName: "ETAT",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        let etatText;
        let backgroundColor;
        
        switch (row.ETATS) {
          case 2:
            etatText = "Opérationnelle";
            backgroundColor = "#4caf50"; // Green
            break;
          case 1:
            etatText = "Fermée";
            backgroundColor = "#f44336"; // Red
            break;
          case 0:
            etatText = "Renovation";
            backgroundColor = "#ff9800"; // Orange
            break;
          default:
            etatText = "Indéterminé";
            backgroundColor = "#9e9e9e"; // Grey
        }

        return (
          <Box
            sx={{
              textAlign: "center",
              p: "6px 16px",
              borderRadius: "16px",
              backgroundColor: backgroundColor,
              minWidth: "120px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography 
              sx={{ 
                fontSize: "13px", 
                color: "white",
                fontWeight: "medium",
                textTransform: "capitalize"
              }}
            >
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
        return <ModifyStation station={row} />;
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
                <p className="pt-2 text-2xl font-bold">STATION</p>
                <Box flexGrow={1} />
                <FormDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto" }}>
        <DataGrid
          rows={stations}
          columns={columns}
          getRowId={(row) => row.CODE_STATION}
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

export default Station;
