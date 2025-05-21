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

export default function ModifyStation() {
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
                label="STATION"
                focused
                value="Your disabled value here"
                disabled
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="CODE STATION"
                focused
                value="Your disabled value here"
                disabled
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mt-4 mr-7">
              <TextField
                className="w-65"
                label="CODE LOCAL"
                focused
                value="S5628R"
                disabled
              />
            </div>
            <div className="mt-4 mr-2">
              <TextField
                className="w-65"
                label="TYPE BOUTIQUE"
                focused
                value="RESTAURANT"
                disabled
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
                <MenuItem value={10}>OCCUPE</MenuItem>
                <MenuItem value={20}>LIBRE</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mt-4 mr-2">
            <TextField
              className="w-full"
              label="CLIENT"
              focused
              value="G5286e5"
              disabled
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Confirmer</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
