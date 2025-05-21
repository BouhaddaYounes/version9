import * as React from "react";


import { AppDispatch } from '../redux/store';
import {
 updateStation,

} from '../redux/slices/stationSlice';

import { useDispatch } from 'react-redux';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface ModifyStationProps {
  station: {
    CODE_STATION: string;
    NOM_STATION: string;
    TYPE_ACTIVITE: number;
    CODE_DISTRICT: string;
    ETAT:"";
    [key: string]: any;
  };
}

export default function ModifyStation({ station }: ModifyStationProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();


const ETAT = 
   
[1,2,3]


    const [Station, setStation] = React.useState(


      {
     CODE_STATION: station.CODE_STATION,
    NOM_STATION: station.NOM_STATION,
    TYPE_ACTIVITE:  "",
    CODE_DISTRICT: station.CODE_DISTRICT,
    Activite:"",
    ETAT:'',
  }
    );

  const UpdateStation= () => {
    console.log(Station)
   // dispatch( updateStation({ ...Station,codestation }));

  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="Modify Station"
        variant="contained"
        onClick={handleClickOpen}
      >
        <ArrowOutwardOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Modifier une station</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-4">
            <div className="mr-7 mt-4 ">
              <TextField
                className="w-65"
                label="CODE STATION"
              name="CODE_STATION"
                focused
                value={station.CODE_STATION}
                // onChange={(e) => setStation({ ...Station,CODE_STATION: station.CODE_STATION})}
                disabled
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="NOM DE STATION"
                focused
                name=".NOM_STATION"
                value={Station.NOM_STATION}
                 onChange={(e) => setStation({ ...Station,NOM_STATION: e.target.value })}

                disabled
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mt-4 mr-2">
              <TextField label="DISTRICT" focused value={station.CODE_DISTRICT}
               disabled 
               name="CODE_DISTRICT"
               
                 onChange={(e) => setStation({ ...Station,CODE_DISTRICT: e.target.value })}
              
              />
            </div>
            <div className="mt-4 mr-2">
              <TextField label="NBR BOUTIQUE" focused value="8" disabled />
            </div>
            <div className="mt-4">
              <TextField label="WILAYA" focused value="ORAN" disabled />
            </div>
          </div>
          <div className="mb-4">
            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">ETAT</InputLabel>
             <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Station.ETAT}
                  name="ETAT"
                  label="Etat"
                  onChange={(e) => setStation({ ...Station, ETAT: e.target.value })}
              >
                {ETAT.map((post, index) => {
                    let name;
                    switch(post) {
                        case 1:
                            name = "Operationel";
                            break;
                        case 2:
                            name = "Renovation";
                            break;
                        case 3:
                            name = "Fermé";
                            break;
                        default:
                            name = "";
                            break;
                    }
                    return (
                        <MenuItem key={index} value={post}>
                            {name}
                        </MenuItem>
                    );
                })}
            </Select>
            </FormControl>
          </div>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Activité</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Station.Activite}
              label="Activité"
               name="Activité"
               
                onChange={(e) => setStation({ ...Station,Activite: e.target.value })}
             
            >
              <MenuItem value={1}>HF</MenuItem>
              <MenuItem value={2}>ABS</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit" onClick={ UpdateStation}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
