
import * as React from "react";


import { AppDispatch } from '../redux/store';
import {
  fetchStations,
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
    ETATS: number;
    [key: string]: any;
  };
}

export default function ModifyStation({ station }: ModifyStationProps) {
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState<string | null>(null);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const dispatch = useDispatch();


const ETATS = [1,2,3]


  //   const [Station, setStation] = React.useState(


  //     {
  //    CODE_STATION: station.CODE_STATION,
  //   NOM_STATION: station.NOM_STATION,
  //   CODE_DISTRICT: station.CODE_DISTRICT,
  //   TYPE_ACTIVITE: Number(station.TYPE_ACTIVITE) || 0,
  //   // ACTIVITE:"",
  //   ETATS: Number(station.ETATS) || 0
  // }
  //   );
  const [Station, setStation] = React.useState<{
  CODE_STATION: string;
  NOM_STATION: string;
  CODE_DISTRICT: string;
  TYPE_ACTIVITE: number | "";
  ETATS: number | "";
  }>({
    CODE_STATION: station.CODE_STATION,
    NOM_STATION: station.NOM_STATION,
    CODE_DISTRICT: station.CODE_DISTRICT,
    TYPE_ACTIVITE: station.TYPE_ACTIVITE ?? "", 
    ETATS: station.ETATS ?? "",

  });

 React.useEffect(() => {
    if (open) {
      setStation({
        CODE_STATION: station.CODE_STATION,
        NOM_STATION: station.NOM_STATION,
        CODE_DISTRICT: station.CODE_DISTRICT,
        TYPE_ACTIVITE: station.TYPE_ACTIVITE ?? "",
        ETATS: station.ETATS ?? "",
      });
    }
  }, [open]);

  // const UpdateStation= () => {
  //   console.log(Station)
  //  // dispatch( updateStation({ ...Station,codestation }));

  // };
  // console.log("Station", Station);
  const dispatch = useDispatch<AppDispatch>();
    const UpdateStation = () => {
      console.log("UpdateStation called");
      setLoading(true);
      setError(null);
      dispatch(updateStation({
      CODE_STATION: Station.CODE_STATION,
      ETATS: Number(Station.ETATS),
      TYPE_ACTIVITE: Number(Station.TYPE_ACTIVITE),
    }))
    .unwrap()
    // .then(() => {
    //   dispatch(fetchStations());
    //   handleClose();
    .then(() => {
      console.log("Update success, fetching stations");
      return dispatch(fetchStations());
    })
    .then(() => {
      console.log("Stations fetched, closing dialog");
      handleClose();
    })
    .catch((err) => {
      console.error("Erreur lors de la mise à jour:", err.message);
    })
    .finally(() => {
      setLoading(false);
    });
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
                component: "form" as React.ElementType,
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  UpdateStation();
                },
              },
            }}

            // slotProps={{
            //   paper: {
            //     component: "form",
            //     onSubmit: handleSubmit,
            //     // onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            //     //   event.preventDefault();
            //     //   dispatch(updateStation({
            //     //     CODE_STATION: Station.CODE_STATION,
            //     //     ETATS: Number(Station.ETATS),
            //     //     TYPE_ACTIVITE: Number(Station.TYPE_ACTIVITE),
            //     //   }))
            //     //     .unwrap()
            //     //     .then(() => {
            //     //       // dispatch(fetchStations());
            //     //       handleClose();
            //     //     })
            //     //     .catch((err) => {
            //     //       console.error("Erreur lors de la mise à jour:", err.message);
            //     //     });
            //     },
            //   },
            // }}
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
                    value={Station.CODE_STATION}
                    disabled
                  />
                </div>

                <div className="mr-4 mt-4">
                  <TextField
                    className="w-65"
                    label="NOM DE STATION"
                    focused
                    name="NOM_STATION"
                    value={Station.NOM_STATION}
                    onChange={(e) =>
                      setStation({ ...Station, NOM_STATION: e.target.value })
                    }
                    disabled
                  />
                </div>
              </div>

              <div className="flex mb-4">
                <div className="mt-4 mr-2">
                  <TextField
                    label="DISTRICT"
                    focused
                    value={Station.CODE_DISTRICT}
                    disabled
                    name="CODE_DISTRICT"
                    onChange={(e) =>
                      setStation({ ...Station, CODE_DISTRICT: e.target.value })
                    }
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
                  <InputLabel id="etat-select-label">ETAT</InputLabel>
                  <Select
                    disabled={loading}
                    labelId="etat-select-label"
                    id="etat-select"
                    value={Station.ETATS}
                    name="ETATS"
                    label="ETAT"
                    onChange={(e) =>
                      setStation({ ...Station, ETATS: Number(e.target.value) })
                    }
                  >
                    {[0, 1, 2].map((etat) => {
                      let name = "";
                      switch (etat) {
                        case 0:
                          name = "Renovation";
                          break;
                        case 1:
                          name = "Fermé";
                          break;
                        case 2:
                          name = "Operationel";
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
              </div>

              <FormControl fullWidth>
                <InputLabel id="activite-select-label">Activité</InputLabel>
                <Select
                disabled={loading}
                  labelId="activite-select-label"
                  id="activite-select"
                  value={Station.TYPE_ACTIVITE}
                  label="Activité"
                  name="TYPE_ACTIVITE"
                  onChange={(e) =>
                    setStation({ ...Station, TYPE_ACTIVITE: Number(e.target.value) })
                  }
                  
                >
                  {/* <MenuItem value={1}>HF</MenuItem>
                  <MenuItem value={2}>ABS</MenuItem> */}
                  {[1, 2].map((activite) => {
                      let name = "";
                      switch (activite) {
                        case 1:
                          name = "HF";
                          break;
                        case 2:
                          name = "ABS";
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
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Annuler</Button>
              <Button type="submit" disabled={loading}> {loading ? "En cours..." : "Confirmer"}</Button>
            </DialogActions>
          </Dialog>

    </React.Fragment>
  );
}



 



// import * as React from "react";


// import { AppDispatch } from '../redux/store';
// import {
//  updateStation,

// } from '../redux/slices/stationSlice';

// import { useDispatch } from 'react-redux';
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
// import {
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
// } from "@mui/material";

// interface ModifyStationProps {
//   station: {
//     CODE_STATION: string;
//     NOM_STATION: string;
//     TYPE_ACTIVITE: number;
//     CODE_DISTRICT: string;
//     ETATS: number;
//     [key: string]: any;
//   };
// }

// export default function ModifyStation({ station }: ModifyStationProps) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   // const dispatch = useDispatch();


// const ETATS = [1,2,3]


//   //   const [Station, setStation] = React.useState(


//   //     {
//   //    CODE_STATION: station.CODE_STATION,
//   //   NOM_STATION: station.NOM_STATION,
//   //   CODE_DISTRICT: station.CODE_DISTRICT,
//   //   TYPE_ACTIVITE: Number(station.TYPE_ACTIVITE) || 0,
//   //   // ACTIVITE:"",
//   //   ETATS: Number(station.ETATS) || 0
//   // }
//   //   );
//   const [Station, setStation] = React.useState<{
//   CODE_STATION: string;
//   NOM_STATION: string;
//   CODE_DISTRICT: string;
//   TYPE_ACTIVITE: number | "";
//   ETATS: number | "";
// }>({
//   CODE_STATION: station.CODE_STATION,
//   NOM_STATION: station.NOM_STATION,
//   CODE_DISTRICT: station.CODE_DISTRICT,
//   TYPE_ACTIVITE: station.TYPE_ACTIVITE ?? "", // من الأفضل استخدام القيمة من الـ props
//   ETATS: station.ETATS ?? "",

// });


//   // const UpdateStation= () => {
//   //   console.log(Station)
//   //  // dispatch( updateStation({ ...Station,codestation }));

//   // };
//   // console.log("Station", Station);
//   const dispatch = useDispatch<AppDispatch>();
// const UpdateStation = () => {
//   dispatch(updateStation({
//     CODE_STATION: Station.CODE_STATION,
//     ETATS: Number(Station.ETATS),
//     TYPE_ACTIVITE: Number(Station.TYPE_ACTIVITE),
//   }))
//   .unwrap()
//   .then(() => {
//     handleClose();
//     // No need to do anything else if redux state updates correctly
//     // UI should reflect changes automatically
//   })
//   .catch((err) => {
//     console.error("Erreur lors de la mise à jour:", err);
//   });
// };




//   return (
//     <React.Fragment>
//       <IconButton
//         aria-label="Modify Station"
//         variant="contained"
//         onClick={handleClickOpen}
//       >
//         <ArrowOutwardOutlinedIcon />
//       </IconButton>
     
//       <Dialog
//   open={open}
//   onClose={handleClose}
// >
//   <DialogTitle>Modifier une station</DialogTitle>
//   <DialogContent>
//     <DialogContentText></DialogContentText>

//     <div className="flex mb-4">
//       <div className="mr-7 mt-4 ">
//         <TextField
//           className="w-65"
//           label="CODE STATION"
//           name="CODE_STATION"
//           focused
//           value={Station.CODE_STATION}
//           disabled
//         />
//       </div>

//       <div className="mr-4 mt-4">
//         <TextField
//           className="w-65"
//           label="NOM DE STATION"
//           focused
//           name="NOM_STATION"
//           value={Station.NOM_STATION}
//           onChange={(e) => setStation({ ...Station, NOM_STATION: e.target.value })}
//           disabled
//         />
//       </div>
//     </div>

//     <div className="flex mb-4">
//       <div className="mt-4 mr-2">
//         <TextField
//           label="DISTRICT"
//           focused
//           value={Station.CODE_DISTRICT}
//           disabled
//           name="CODE_DISTRICT"
//           onChange={(e) => setStation({ ...Station, CODE_DISTRICT: e.target.value })}
//         />
//       </div>
//       <div className="mt-4 mr-2">
//         <TextField label="NBR BOUTIQUE" focused value="8" disabled />
//       </div>
//       <div className="mt-4">
//         <TextField label="WILAYA" focused value="ORAN" disabled />
//       </div>
//     </div>

//     <FormControl fullWidth className="mb-4">
//       <InputLabel id="etat-select-label">ETAT</InputLabel>
//       <Select
//         labelId="etat-select-label"
//         id="etat-select"
//         value={Station.ETATS}
//         name="ETATS"
//         label="ETAT"
//         onChange={(e) =>
//           setStation({ ...Station, ETATS: Number(e.target.value) })
//         }
//       >
//         {[0, 1, 2].map((etat) => {
//           let name = "";
//           switch (etat) {
//             case 0:
//               name = "Rénovation";
//               break;
//             case 1:
//               name = "Fermé";
//               break;
//             case 2:
//               name = "Opérationnel";
//               break;
//           }
//           return (
//             <MenuItem key={etat} value={etat}>
//               {name}
//             </MenuItem>
//           );
//         })}
//       </Select>
//     </FormControl>

//     <FormControl fullWidth>
//       <InputLabel id="activite-select-label">Activité</InputLabel>
//       <Select
//         labelId="activite-select-label"
//         id="activite-select"
//         value={Station.TYPE_ACTIVITE}
//         label="Activité"
//         name="TYPE_ACTIVITE"
//         onChange={(e) =>
//           setStation({ ...Station, TYPE_ACTIVITE: Number(e.target.value) })
//         }
//       >
//         {[1, 2].map((activite) => {
//           let name = "";
//           switch (activite) {
//             case 1:
//               name = "HF";
//               break;
//             case 2:
//               name = "ABS";
//               break;
//           }
//           return (
//             <MenuItem key={activite} value={activite}>
//               {name}
//             </MenuItem>
//           );
//         })}
//       </Select>
//     </FormControl>
//   </DialogContent>

//   <DialogActions>
//     <Button onClick={handleClose}>Annuler</Button>
//     <Button onClick={UpdateStation}>Confirmer</Button>
//   </DialogActions>
// </Dialog>


//     </React.Fragment>
//   );
// }



 