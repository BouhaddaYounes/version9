
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

export default function FormDialogContrat() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [type, setType] = React.useState("");
  const [CODEOPE, setCODEOPE] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setCODEOPE(event.target.value as string);
  };

  const [Station, setStation] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setStation(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        + Contrat
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
        <DialogTitle>Ajouter une Contrat</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-4">
            <div className="mr-4 w-75 mt-4">
              <FormControl fullWidth className="mb-">
                <InputLabel id="demo-simple-select-label">
                  CODE OPERATEUR
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={CODEOPE}
                  required
                  label="CODE OPERATEUR"
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>OPE1</MenuItem>
                  <MenuItem value={2}>OPE2</MenuItem>
                  <MenuItem value={3}>OPE3</MenuItem>
                  <MenuItem value={4}>OPE4</MenuItem>
                  <MenuItem value={5}>OPE5</MenuItem>
                </Select>
              </FormControl>
            </div>


<div className="mr-4 w-75 mt-4">
              <FormControl fullWidth className="mb-">
                <InputLabel id="demo-simple-select-label">
                  CODE STATION
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Station}
                  required
                  label="STATION"
                  onChange={handleChange1}
                >
                  <MenuItem value={1}>STA1</MenuItem>
                  <MenuItem value={2}>STA2</MenuItem>
                  <MenuItem value={3}>STA3</MenuItem>
                  <MenuItem value={4}>STA4</MenuItem>
                  <MenuItem value={5}>STA5</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mr-4 w-75 mt-4">
              <FormControl fullWidth className="mb-">
                <InputLabel id="demo-simple-select-label">
                  TYPE LOYER
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  required
                  label="Type Loyer"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>WC</MenuItem>
                  <MenuItem value={2}>RESTAURANT</MenuItem>
                  <MenuItem value={3}>SUPERETTE</MenuItem>
                  <MenuItem value={4}>LAVAGE</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex">
            <div className="w-75">
              <TextField
                label="CODE CONTRAT"
                focused
                fullWidth
                required
                type="text"
                name="DATE_DE_FACTURATION"
              />
            </div>
            <div className="w-75 mb-4 mr-4 ml-4 ">
              <TextField
                label="DATE DE FACTURATION"
                focused
                required
                fullWidth
                type="date"
                name="DATE_DE_FACTURATION"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-4 w-65">
              <TextField
                label="DATE VIGEUR"
                focused
                required
                fullWidth
                type="date"
                name="DATE_VIGEUR"
              />
            </div>
            <div className="mb-4 ml-4 w-65">
              <TextField
                label="DATE FIN"
                focused
                required
                fullWidth
                type="date"
                name="DATE_FIN"
              />
            </div>
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
