// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   CircularProgress,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// // import { useDispatch } from "react-redux";
// // import { createLocal, fetchLoyers } from "../redux/slices/loyerSlice"; // adjust the path if needed


// export default function FormDialogLoc() {
//   // const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const [station, setStation] = React.useState<string>("");
//   const [stationList, setStationList] = React.useState<string[]>([]);
//   const [formData, setFormData] = React.useState<{ TYPE_LOYER: number | ""; ETAT: number | "" }>({
//     TYPE_LOYER: "",
//     ETAT: "",
//   });
//   const [loadingStations, setLoadingStations] = React.useState(false);
//   const [loadingSubmit, setLoadingSubmit] = React.useState(false);
//   const [errorStations, setErrorStations] = React.useState<string | null>(null);
//   const [submitError, setSubmitError] = React.useState<string | null>(null);
//   const [submitSuccess, setSubmitSuccess] = React.useState<string | null>(null);

//   const handleClickOpen = () => {
//     setOpen(true);
//     setSubmitError(null);
//     setSubmitSuccess(null);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSubmitError(null);
//     setSubmitSuccess(null);
//     setStation("");
//     setFormData({ TYPE_LOYER: "", ETAT: "" });
//   };

//   const handleChangeStation = (event: SelectChangeEvent<string>) => {
//     setStation(event.target.value);
//   };

//   React.useEffect(() => {
//     const fetchStations = async () => {
//       setLoadingStations(true);
//       setErrorStations(null);
//       try {
//         const res = await axios.get("http://localhost:5000/api/stations/codes");
//         setStationList(res.data); // Expect array of strings
//       } catch (err) {
//         setErrorStations("Erreur lors du chargement des stations");
//       } finally {
//         setLoadingStations(false);
//       }
//     };

//     fetchStations();
//   }, []);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setSubmitError(null);
//     setSubmitSuccess(null);

//     if (!station || formData.TYPE_LOYER === "" || formData.ETAT === "") {
//       setSubmitError("Veuillez remplir tous les champs.");
//       return;
//     }

//     setLoadingSubmit(true);
//     try {
//       // Example API call, adjust URL and payload as needed
//       await axios.post("http://localhost:5000/api/addLoyer", {
//         codeStation: station,
//         typeLoyer: formData.TYPE_LOYER,
//         etat: formData.ETAT  
//       });
//       setSubmitSuccess("Local ajouté avec succès.");
//       handleClose();
//     } catch (error) {
//       setSubmitError("Erreur lors de l'ajout du local.");
//     } finally {
//       setLoadingSubmit(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Button variant="contained" onClick={handleClickOpen}>
//         + Local
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         slotProps={{
//           paper: {
//             component: "form",
//             onSubmit: handleSubmit,
//           },
//         }}
//       >
//         <DialogTitle>Ajouter un local</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {errorStations && (
//               <Typography color="error" variant="body2" gutterBottom>
//                 {errorStations}
//               </Typography>
//             )}
//           </DialogContentText>

//           <div className="mb-4 w-100 mt-4">
//             <FormControl fullWidth className="mb-4" disabled={loadingStations}>
//               <InputLabel id="station-select-label">CODE STATION</InputLabel>
//               {loadingStations ? (
//                 <CircularProgress size={24} />
//               ) : (
//                 <Select
//                   labelId="station-select-label"
//                   id="station-select"
//                   value={station}
//                   name="codeStation"
//                   label="CODE STATION"
//                   onChange={handleChangeStation}
//                 >
//                   {stationList.map((code) => (
//                     <MenuItem key={code} value={code}>
//                       {code}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               )}
//             </FormControl>
//           </div>

//           <div className="mb-4">
//             <FormControl fullWidth disabled={loadingSubmit}>
//               <InputLabel id="type-loyer-select-label">TYPE LOYER</InputLabel>
//               <Select
//                 labelId="type-loyer-select-label"
//                 id="type-loyer-select"
//                 name="TYPE_LOYER"
//                 value={formData.TYPE_LOYER}
//                 label="TYPE LOYER"
//                 onChange={(e) =>
//                   setFormData({ ...formData, TYPE_LOYER: Number(e.target.value) })
//                 }
//               >
//                 {[1, 2, 3, 4, 5, 6].map((activite) => {
//                   let name = "";
//                   switch (activite) {
//                     case 1:
//                       name = "Restauration";
//                       break;
//                     case 2:
//                       name = "Boutique";
//                       break;
//                     case 3:
//                       name = "Lavage";
//                       break;
//                     case 4:
//                       name = "Distributeur";
//                       break;
//                     case 5:
//                       name = "Publicité";
//                       break;
//                     case 6:
//                       name = "Antenne";
//                       break;
//                   }
//                   return (
//                     <MenuItem key={activite} value={activite}>
//                       {name}
//                     </MenuItem>
//                   );
//                 })}
//               </Select>
//             </FormControl>
//           </div>

//           <FormControl fullWidth className="mb-4" disabled={loadingSubmit}>
//             <InputLabel id="etat-select-label">ETAT</InputLabel>
//             <Select
//               labelId="etat-select-label"
//               id="etat-select"
//               name="ETAT"
//               value={formData.ETAT}
//               onChange={(e) =>
//                 setFormData({ ...formData, ETAT: Number(e.target.value) })
//               }
//               label="ETAT"
//             >
//               {[0, 1].map((etat) => {
//                 let name = "";
//                 switch (etat) {
//                   case 0:
//                     name = "Occupé";
//                     break;
//                   case 1:
//                     name = "Libre";
//                     break;
//                 }
//                 return (
//                   <MenuItem key={etat} value={etat}>
//                     {name}
//                   </MenuItem>
//                 );
//               })}
//             </Select>
//           </FormControl>

//           {submitError && (
//             <Typography color="error" variant="body2" gutterBottom>
//               {submitError}
//             </Typography>
//           )}
//           {submitSuccess && (
//             <Typography color="primary" variant="body2" gutterBottom>
//               {submitSuccess}
//             </Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} disabled={loadingSubmit}>
//             Annuler
//           </Button>
//           <Button type="submit" disabled={loadingSubmit}>
//             {loadingSubmit ? "Ajout..." : "Ajouter"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


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
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";

type Props = {
  onAddSuccess: () => void; // function to call on successful add to refresh list
};

export default function FormDialogLoc({ onAddSuccess }: Props) {
  const [open, setOpen] = React.useState(false);
  const [station, setStation] = React.useState<string>("");
  const [stationList, setStationList] = React.useState<string[]>([]);
  const [formData, setFormData] = React.useState<{ TYPE_LOYER: number | ""; ETAT: number | "" }>({
    TYPE_LOYER: "",
    ETAT: "",
  });
  const [loadingStations, setLoadingStations] = React.useState(false);
  const [loadingSubmit, setLoadingSubmit] = React.useState(false);
  const [errorStations, setErrorStations] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = React.useState<string | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
    setSubmitError(null);
    setSubmitSuccess(null);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitError(null);
    setSubmitSuccess(null);
    setStation("");
    setFormData({ TYPE_LOYER: "", ETAT: "" });
  };

  const handleChangeStation = (event: SelectChangeEvent<string>) => {
    setStation(event.target.value);
  };

  React.useEffect(() => {
    const fetchStations = async () => {
      setLoadingStations(true);
      setErrorStations(null);
      try {
        const res = await axios.get("http://localhost:5000/api/stations/codes");
        setStationList(res.data); // Expect array of strings
      } catch (err) {
        setErrorStations("Erreur lors du chargement des stations");
      } finally {
        setLoadingStations(false);
      }
    };

    fetchStations();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!station || formData.TYPE_LOYER === "" || formData.ETAT === "") {
      setSubmitError("Veuillez remplir tous les champs.");
      return;
    }

    setLoadingSubmit(true);
    try {
      await axios.post("http://localhost:5000/api/addLoyer", {
        codeStation: station,
        typeLoyer: formData.TYPE_LOYER,
        etat: formData.ETAT,
      });
      setSubmitSuccess("Local ajouté avec succès.");
      onAddSuccess();  // Notify parent to refresh
      handleClose();
    } catch (error) {
      setSubmitError("Erreur lors de l'ajout du local.");
    } finally {
      setLoadingSubmit(false);
    }
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
            onSubmit: handleSubmit,
          },
        }}
      >
        <DialogTitle>Ajouter un local</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errorStations && (
              <Typography color="error" variant="body2" gutterBottom>
                {errorStations}
              </Typography>
            )}
          </DialogContentText>

          <div className="mb-4 w-100 mt-4">
            <FormControl fullWidth className="mb-4" disabled={loadingStations}>
              <InputLabel id="station-select-label">CODE STATION</InputLabel>
              {loadingStations ? (
                <CircularProgress size={24} />
              ) : (
                <Select
                  labelId="station-select-label"
                  id="station-select"
                  value={station}
                  name="codeStation"
                  label="CODE STATION"
                  onChange={handleChangeStation}
                >
                  {stationList.map((code) => (
                    <MenuItem key={code} value={code}>
                      {code}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </FormControl>
          </div>

          <div className="mb-4">
            <FormControl fullWidth disabled={loadingSubmit}>
              <InputLabel id="type-loyer-select-label">TYPE LOYER</InputLabel>
              <Select
                labelId="type-loyer-select-label"
                id="type-loyer-select"
                name="TYPE_LOYER"
                value={formData.TYPE_LOYER}
                label="TYPE LOYER"
                onChange={(e) =>
                  setFormData({ ...formData, TYPE_LOYER: Number(e.target.value) })
                }
              >
                {[1, 2, 3, 4, 5, 6].map((activite) => {
                  let name = "";
                  switch (activite) {
                    case 1:
                      name = "Restauration";
                      break;
                    case 2:
                      name = "Boutique";
                      break;
                    case 3:
                      name = "Lavage";
                      break;
                    case 4:
                      name = "Distributeur";
                      break;
                    case 5:
                      name = "Publicité";
                      break;
                    case 6:
                      name = "Antenne";
                      break;
                  }
                  return (
                    <MenuItem key={activite} value={activite}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <FormControl fullWidth className="mb-4" disabled={loadingSubmit}>
            <InputLabel id="etat-select-label">ETAT</InputLabel>
            <Select
              labelId="etat-select-label"
              id="etat-select"
              name="ETAT"
              value={formData.ETAT}
              onChange={(e) =>
                setFormData({ ...formData, ETAT: Number(e.target.value) })
              }
              label="ETAT"
            >
              {[0, 1].map((etat) => {
                let name = "";
                switch (etat) {
                  case 0:
                    name = "Occupé";
                    break;
                  case 1:
                    name = "Libre";
                    break;
                }
                return (
                  <MenuItem key={etat} value={etat}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          {submitError && (
            <Typography color="error" variant="body2" gutterBottom>
              {submitError}
            </Typography>
          )}
          {submitSuccess && (
            <Typography color="primary" variant="body2" gutterBottom>
              {submitSuccess}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loadingSubmit}>
            Annuler
          </Button>
          <Button type="submit" disabled={loadingSubmit}>
            {loadingSubmit ? "Ajout..." : "Ajouter"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
