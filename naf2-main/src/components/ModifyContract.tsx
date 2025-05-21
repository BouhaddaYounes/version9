import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AlarmIcon from "@mui/icons-material/Alarm";
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

  const [Etat, setEtat] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEtat(event.target.value as string);
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
        <DialogTitle>Ajouter une Station</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-4">
            <div className="mr-4">
              <TextField
                className="mr-2"
                autoFocus
                required
                margin="dense"
                id="Nom"
                name="Nom"
                label="Nom"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
            <div>
              <TextField
                autoFocus
                required
                margin="dense"
                id="Wilaya"
                name="Wilaya"
                label="Wilaya"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
          </div>
          <div className="mb-4">
            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">ETAT</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Etat}
                label="Etat"
                onChange={handleChange}
              >
                <MenuItem value={10}>Operationel</MenuItem>
                <MenuItem value={20}>Renovation</MenuItem>
                <MenuItem value={30}>Fermé</MenuItem>
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
