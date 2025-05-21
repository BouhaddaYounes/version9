import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import { getAllStation } from '../StoreData/Action/station';
import AjoutLoyer from '../views/utilities/AjouterLoyer';
import LabStation from '../forme/DetailStationLoyer';

interface Station {
  id: string;
  CODE_STATION: string;
  NOM_STATION: string;
  TYPE_ACTIVITE: number;
  CODE_DISTRICT: string;
  [key: string]: any;
}

export const Stationc: GridColDef[] = [
  { field: "id", headerName: "id", hide: true, flex: 0.2, minWidth: 50 },
  { field: "CODE_STATION", headerName: "CODE STATION", flex: 0.3, minWidth: 50 },
  { field: "NOM_STATION", headerName: "NOM STATION", flex: 0.5, minWidth: 150 },
  {
    field: "TYPE_ACTIVITE",
    headerName: "ACTIVITE",
    flex: 0.1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams<Station>) => {
      let statusText: string;
      let statusClass: string;

      switch (params.row.TYPE_ACTIVITE) {
        case 1:
          statusText = "HF";
          statusClass = "HF";
          break;
        case 2:
          statusText = "ABS";
          statusClass = "ABS";
          break;
        default:
          statusText = "Inconnu";
          statusClass = "inconnu";
      }

      return (
        <div className={\`cellWithStatus \${statusClass}\`}>
          {statusText}
        </div>
      );
    },
  },
  { field: "CODE_DISTRICT", headerName: "CODE DISTRICT", flex: 0.3, minWidth: 50 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 0.3,
    minWidth: 100,
    renderCell: (params: GridRenderCellParams<Station>) => {
      return (
        <div className="cellAction">
          <Link to={`/station/${params.row.id}`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <Link to={`/loyer/${params.row.id}`}>
            <IconButton color="secondary">
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </div>
      );
    },
  },
];

const Datatable: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [recordForEdit, setRecordForEdit] = useState<Station | null>(null);

  useEffect(() => {
    dispatch(getAllStation());
  }, [dispatch]);

  const handleAddClick = () => {
    setOpenPopup(true);
    setRecordForEdit(null);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Ajouter
      </Button>
      <DataGrid
        rows={[]} // Add your rows data here
        columns={Stationc}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        onSelectionModelChange={(newSelection) => {
          setSelectedRows(newSelection as string[]);
        }}
      />
      <AjoutLoyer
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        recordForEdit={recordForEdit}
      />
    </div>
  );
};

export default Datatable;
