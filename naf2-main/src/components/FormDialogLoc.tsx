import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
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

  const [station, setStation] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setStation(event.target.value as string);
  };

  const [Boutique, setBoutique] = React.useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setBoutique(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        + Local
      </Button>
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
        <DialogTitle>Ajouter un local</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="mb-4 w-100 mt-4">
            <div className="mb-4">
              <TextField
                autoFocus
                required
                margin="dense"
                id="NOM_Local"
                name="NOM_Local"
                label="Nom de Local"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">STATION</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={station}
                label="Etat"
                onChange={handleChange1}
              >
                <MenuItem value={1}>#415p7d</MenuItem>
                <MenuItem value={2}>#4318ms</MenuItem>
                <MenuItem value={3}>#43nr9</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                TYPE BOUTIQUE
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Boutique}
                label="Activité"
                onChange={handleChange2}
              >
                <MenuItem value={1}>Restaurant</MenuItem>
                <MenuItem value={2}>WC</MenuItem>
                <MenuItem value={3}>superette</MenuItem>
                <MenuItem value={4}>Lavage</MenuItem>
                <MenuItem value={5}>Salon de tea</MenuItem>
                <MenuItem value={6}>Fast Food</MenuItem>
              </Select>
            </FormControl>
          </div>

          <FormControl fullWidth className="mb-4">
            <InputLabel id="demo-simple-select-label">ETAT</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Etat}
              label="Etat"
              onChange={handleChange}
            >
              <MenuItem value={1}>Libre</MenuItem>
              <MenuItem value={2}>Occupé</MenuItem>
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
