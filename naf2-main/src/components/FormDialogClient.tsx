import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
} from "@mui/material";

export default function FormDialogClient() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Etat, setEtat] = React.useState("");
  const [DOMICILIATION, setDOMICILIATION] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEtat(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setDOMICILIATION(event.target.value as string);
  };

  const [Activite, setActivite] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setActivite(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        + Client
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
        <DialogTitle>Ajouter un client</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-4">
            <div className="mr-4">
              <TextField
                className="mr-2"
                autoFocus
                required
                margin="dense"
                id="CODE CLIENT"
                name="CODE CLIENT"
                label="CODE CLIENT"
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
                id="RAISON SOCIALE"
                name="RAISON SOCIALE"
                label="RAISON SOCIALE"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
          </div>
          <div className="mb-4">
            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">
                DOMICILIATION
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={DOMICILIATION}
                label="DOMICILIATION"
                onChange={handleChange2}
              >
                <MenuItem value={10}>BEA</MenuItem>
                <MenuItem value={20}>BNA</MenuItem>
                <MenuItem value={30}>GBA</MenuItem>
                <MenuItem value={30}>CPA</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <TextField
              autoFocus
              required
              margin="dense"
              id="Tel"
              name="Tel"
              label="Tel"
              type="text"
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mb-4">
            <TextField
              autoFocus
              required
              margin="dense"
              id="Adresse"
              name="Adresse"
              label="Adresse"
              type="text"
              fullWidth
              variant="standard"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
