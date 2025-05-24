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

export default function ModifyContract() {
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
        <DialogTitle>détail de contrat</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="flex mb-2">
            <div className="mr-7 mt-4 ">
              <TextField
                className="w-65"
                label="CODE STATION"
                focused
                value="#84486626"
                disabled
              />
            </div>

            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="CODE LOYER"
                focused
                value="#9569s49"
                disabled
              />
            </div>
          </div>
          <div className="flex mb-2">
            <div className="mt-4 mr-2 w-65">
              <TextField
                label="TYPE LOYER"
                focused
                fullWidth
                value="RESTAURANT"
                disabled
              />
            </div>
            <div className="mt-4 ml-4 w-65">
              <TextField
                label="DATE FACTURATION"
                focused
                fullWidth
                type="text"
                disabled
              />
            </div>
          </div>

          <div className="flex mb-2">
            <div className="mt-4 mr-2 w-65">
              <TextField
                label="DATE VIGEUR"
                focused
                type="text"
                fullWidth
                disabled
              />
            </div>
            <div className="mt-4 ml-4 w-65">
              <TextField
                label="DATE FIN"
                focused
                type="text"
                value=""
                fullWidth
                disabled
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="mr-5 mb-4">
            <Button onClick={handleClose}>Fermer</Button>
          </div>

          {/*<Button type="submit">Confirmer</Button>*/}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}