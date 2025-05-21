import * as React from "react";
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

export default function FormDialogLoc() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Domi, setDomi] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDomi(event.target.value as string);
  };

  const [Activite, setActivite] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setActivite(event.target.value as string);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="Modify client"
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
        <DialogTitle>Modifier un client</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-4">
            <div className="mr-7 mt-4 ">
              <TextField
                className="w-65"
                label="CODE CLIENT"
                focused
                value="#g"
                disabled
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                required
                id="RAISON_SOCIALE"
                label="RAISON SOCIALE"
                defaultValue="d45121c6e7"
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-7 mt-4 ">
              <TextField
                className="w-65"
                label="NOM OPERATEUR"
                focused
                value="DIA EL HAK"
                disabled
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="NBR LOCAUX"
                focused
                value="4"
                disabled
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-7 mt-4 ">
              <TextField
                className="w-65"
                label="Adresse"
                focused
                defaultValue="JIJEL-EAK-LAARICHA"
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="tel"
                focused
                defaultValue="0674125749"
              />
            </div>
          </div>
          <div className="mb-4">
            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">ETAT</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Domi}
                label="Etat"
                onChange={handleChange}
                defaultValue="bea"
              >
                <MenuItem value={10}>bea</MenuItem>
                <MenuItem value={20}>bna</MenuItem>
                <MenuItem value={30}>gba</MenuItem>
                <MenuItem value={30}>cpa</MenuItem>
              </Select>
            </FormControl>
          </div>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Activité</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Activite}
              label="Activité"
              onChange={handleChange1}
            >
              <MenuItem value={1}>HF</MenuItem>
              <MenuItem value={2}>ABS</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
