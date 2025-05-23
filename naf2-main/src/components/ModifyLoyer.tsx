// import React, { useState } from 'react';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Box,
//   IconButton,
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../redux/store';
// interface ModifyLoyerProps {
//   loyer: {
//     CODE_LOYER: string;
//     CODE_STATION: string;
//     TYPE_LOYER: number;
//     ETAT: number;
//   };
// }

// const ModifyLoyer: React.FC<ModifyLoyerProps> = ({ loyer }) => {
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState<string | null>(null);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     CODE_LOYER: loyer.CODE_LOYER,
//     CODE_STATION: loyer.CODE_STATION,
//     TYPE_LOYER: loyer.TYPE_LOYER,
//     ETAT: loyer.ETAT,
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   const [Loyer, setLoyer] = React.useState<{
//     CODE_LOYER: string;
//     CODE_STATION: string;
//     TYPE_LOYER: number | "";
//     ETAT: number | "";
//     }>({
//       CODE_LOYER: loyer.CODE_LOYER,
//       CODE_STATION: loyer.CODE_STATION,
//       TYPE_LOYER: loyer.TYPE_LOYER ?? "",
//       ETAT: loyer.ETAT ?? "",
//     });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/api/updateLoyer/${loyer.CODE_LOYER}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         handleClose();
//         window.location.reload();
//       } else {
//         console.error('Failed to update loyer');
//       }
//     } catch (error) {
//       console.error('Error updating loyer:', error);
//     }
//   };

//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this loyer?')) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/deleteLoyer/${loyer.CODE_LOYER}`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           window.location.reload();
//         } else {
//           console.error('Failed to delete loyer');
//         }
//       } catch (error) {
//         console.error('Error deleting loyer:', error);
//       }
//     }
//   };

//   return (
//     <Box>
//       <IconButton onClick={handleClickOpen} color="primary">
//         <EditIcon />
//       </IconButton>
//       <IconButton onClick={handleDelete} color="error">
//         <DeleteIcon />
//       </IconButton>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Modifier Local</DialogTitle>
//         <DialogContent>
//           <Box
//             component="form"
//             sx={{
//               '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               margin="dense"
//               name="CODE_LOYER"
//               label="Code Loyer"
//               type="text"
//               fullWidth
//               value={formData.CODE_LOYER}
//               onChange={handleChange}
//               disabled
//             />
//             <TextField
//               margin="dense"
//               name="CODE_STATION"
//               label="Code Station"
//               type="text"
//               fullWidth
//               value={formData.CODE_STATION}
//               onChange={handleChange}
//             />
//             <div className="mb-4">
//                 <FormControl fullWidth className="mb-4">
//                   <InputLabel id="type-loyer-select-label">TYPE LOYER</InputLabel>
//                     <Select
//                       disabled={loading}
//                       labelId="type-loyer-select-label"
//                       id="type-loyer-select"
//                       value={formData.TYPE_LOYER}
//                       name="TYPE_LOYER"
//                       label="TYPE LOYER"
//                       onChange={(e) =>
//                         setFormData(prev => ({ ...prev, TYPE_LOYER: Number(e.target.value) }))
//                       }
//                     >
//                       {[1, 2, 3, 4, 5, 6].map((etat) => {
//                         let name = "";
//                         switch (etat) {
//                           case 1: name = "Restauration"; break;
//                           case 2: name = "Boutique"; break;
//                           case 3: name = "Lavage"; break;
//                           case 4: name = "Distributeur"; break;
//                           case 5: name = "Publicite"; break;
//                           case 6: name = "Antenne"; break;
//                         }
//                         return (
//                           <MenuItem key={etat} value={etat}>
//                             {name}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                 </FormControl>
//               </div>
//             <div className="mb-4">
//                 <FormControl fullWidth className="mb-4">
//                   <InputLabel id="etat-select-label">ETAT</InputLabel>
//                   <InputLabel id="etat-select-label">ETAT</InputLabel>
//                       <Select
//                         disabled={loading}
//                         labelId="etat-select-label"
//                         id="etat-select"
//                         value={formData.ETAT}
//                         name="ETAT"
//                         label="ETAT"
//                         onChange={(e) =>
//                           setFormData(prev => ({ ...prev, ETAT: Number(e.target.value) }))
//                         }
//                       >
//                         {[0, 1].map((etat) => {
//                           let name = etat === 0 ? "Occupé" : "Libre";
//                           return (
//                             <MenuItem key={etat} value={etat}>
//                               {name}
//                             </MenuItem>
//                           );
//                         })}
//                       </Select>
//                 </FormControl>
//               </div>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Annuler
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Enregistrer
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default ModifyLoyer;

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { updateLoyer, fetchLoyers } from '../redux/slices/loyerSlice';

interface ModifyLoyerProps {
  loyer: {
    CODE_LOYER: string;
    CODE_STATION: string;
    TYPE_LOYER: number;
    ETAT: number;
  };
}

const ModifyLoyer: React.FC<ModifyLoyerProps> = ({ loyer }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    CODE_LOYER: loyer.CODE_LOYER,
    CODE_STATION: loyer.CODE_STATION,
    TYPE_LOYER: loyer.TYPE_LOYER,
    ETAT: loyer.ETAT,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    if (!name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const updateLoyerData = () => {
    setLoading(true);

    dispatch(updateLoyer({
      CODE_LOYER: formData.CODE_LOYER,
      TYPE_LOYER: Number(formData.TYPE_LOYER),
      ETAT: Number(formData.ETAT),
    }))
      .unwrap()
      .then(() => dispatch(fetchLoyers()))
      .then(() => handleClose())
      .catch((err) => {
        console.error("Erreur lors de la mise à jour:", err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleDelete = async () => {
  //   if (window.confirm('Are you sure you want to delete this loyer?')) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/api/deleteLoyer/${loyer.CODE_LOYER}`,
  //         {
  //           method: 'DELETE',
  //         }
  //       );

  //       if (response.ok) {
  //         dispatch(fetchLoyers());
  //       } else {
  //         console.error('Failed to delete loyer');
  //       }
  //     } catch (error) {
  //       console.error('Error deleting loyer:', error);
  //     }
  //   }
  // };

  return (
    <Box>
      <IconButton onClick={handleClickOpen} color="primary">
        <EditIcon />
      </IconButton>
      {/* <IconButton onClick={handleDelete} color="error">
        <DeleteIcon />
      </IconButton> */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier Loyer</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              margin="dense"
              name="CODE_LOYER"
              label="Code Loyer"
              type="text"
              fullWidth
              value={formData.CODE_LOYER}
              onChange={handleChange}
              disabled
            />
            <TextField
              margin="dense"
              name="CODE_STATION"
              label="Code Station"
              type="text"
              fullWidth
              value={formData.CODE_STATION}
              onChange={handleChange}
              disabled
            />

            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="type-loyer-select-label">TYPE LOYER</InputLabel>
              <Select
                labelId="type-loyer-select-label"
                id="type-loyer-select"
                name="TYPE_LOYER"
                value={formData.TYPE_LOYER}
                
                disabled={loading}
                label="TYPE LOYER"
                onChange={(e) =>
                      setFormData({ ...formData, TYPE_LOYER: e.target.value })
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

            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="etat-select-label">ETAT</InputLabel>
              <Select
                labelId="etat-select-label"
                id="etat-select"
                name="ETAT"
                value={formData.ETAT}
                onChange={(e) =>
                  setFormData({ ...formData, ETAT: e.target.value })
                }
                disabled={loading}
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
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={loading}>
            Annuler
          </Button>
          <Button onClick={updateLoyerData} color="primary" disabled={loading}>
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModifyLoyer;
