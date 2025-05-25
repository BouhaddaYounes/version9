// import * as React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../redux/store";
// import { fetchContracts } from "../redux/slices/contractSlice";

// export default function FormDialogContrat() {
//   const dispatch = useDispatch<AppDispatch>();

//   const [open, setOpen] = useState(false);

//   const [selectedOperateur, setSelectedOperateur] = useState("");
//   const [codeLoyer, setCodeLoyer] = useState("");
//   const [typePaiement, setTypePaiement] = useState("");

//   const [loadingOperateurs, setLoadingOperateurs] = useState(false);
//   const [loadingLoyers, setLoadingLoyers] = useState(false);

//   const [codeOperateurList, setCodeOperateurList] = useState<
//     { CODE_OPERATEUR: string }[]
//   >([]);
//   const [codeLoyerList, setCodeLoyerList] = useState<
//     { CODE_LOYER: string }[]
//   >([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoadingOperateurs(true);
//         setLoadingLoyers(true);

//         const [opeRes, loyerRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/operateurs/codes"),
//           axios.get("http://localhost:5000/api/loyers/codes"),
//         ]);

//         setCodeOperateurList(opeRes.data);
//         setCodeLoyerList(loyerRes.data);
//       } catch (err) {
//         console.error("Erreur chargement données", err);
//       } finally {
//         setLoadingOperateurs(false);
//         setLoadingLoyers(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     const payload = {
//         num: NUM
//         codeOperateur: selectedOperateur,
//         codeLoyer: codeLoyer,
//         typePaiement: typePaiement,
//         dateFacturation: formData.get("DATE_FACTURATION"),
//         dateFin: formData.get("DATE_FIN"),
//         dateVigueur: formData.get("DATE_VIGEUR"),
//     };


//     try {
//         console.log("Payload à envoyer :", payload);

//      await axios.post("http://localhost:5000/api/addContrat", payload, {
//         headers: { "Content-Type": "application/json" }
//     });
//       dispatch(fetchContracts());
//       handleClose();
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//             console.error("Erreur Axios:", err.response?.data || err.message);
//         } else {
//             console.error("Erreur inconnue:", err);
//          }

//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button variant="contained" onClick={() => setOpen(true)}>
//         + Contrat
//       </Button>
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
//         <form onSubmit={handleSubmit}>
//           <DialogTitle>Ajouter un Contrat</DialogTitle>
//           <DialogContent>
//             <div className="flex mb-4">
//               <FormControl fullWidth className="mr-4 mt-4" disabled={loadingOperateurs}>
//                 <InputLabel>Code Opérateur</InputLabel>
//                 <Select
//                   label="Code Opérateur"
//                   value={selectedOperateur}
//                   onChange={(e) => setSelectedOperateur(e.target.value)}
//                   required
//                 >
//                   <MenuItem value="" disabled>
//                     Sélectionner un opérateur
//                   </MenuItem>
//                   {codeOperateurList.map((op) => (
//                     <MenuItem key={op} value={op}>
//                       {op}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <FormControl fullWidth className="mr-4 mt-4">
//                 <InputLabel>Type de Paiement</InputLabel>
//                 <Select
//                   value={typePaiement}
//                   onChange={(e: SelectChangeEvent) => setTypePaiement(e.target.value)}
//                   label="Type de Paiement"
//                   required
//                 >
//                   <MenuItem value="mensuel">Mensuel</MenuItem>
//                   <MenuItem value="trimestriel">Trimestriel</MenuItem>
//                   <MenuItem value="annuel">Annuel</MenuItem>
//                 </Select>
//               </FormControl>

//               <FormControl fullWidth className="mr-4 mt-4" disabled={loadingLoyers}>
//                 <InputLabel>Code Loyer</InputLabel>
//                 <Select
//                   value={codeLoyer}
//                   onChange={(e) => setCodeLoyer(e.target.value)}
//                   label="Code Loyer"
//                   required
//                 >
//                   <MenuItem value="" disabled>
//                     Sélectionner un loyer
//                   </MenuItem>
//                   {codeLoyerList.map((loyer) => (
//                     <MenuItem key={loyer} value={loyer}>
//                       {loyer}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </div>

//             <div className="flex">
//               <TextField
//                 label="Code Contrat"
//                 name="NUM"
//                 fullWidth
//                 required
//                 className="mr-4"
//               />
//               <TextField
//                 label="Date de Facturation"
//                 name="DATE_FACTURATION"
//                 type="date"
//                 fullWidth
//                 required
//                 InputLabelProps={{ shrink: true }}
//               />
//             </div>

//             <div className="flex mt-4">
//               <TextField
//                 label="Date Vigueur"
//                 name="DATE_VIGEUR"
//                 type="date"
//                 fullWidth
//                 required
//                 className="mr-4"
//                 InputLabelProps={{ shrink: true }}
//               />
//               <TextField
//                 label="Date Fin"
//                 name="DATE_FIN"
//                 type="date"
//                 fullWidth
//                 required
//                 InputLabelProps={{ shrink: true }}
//               />
//             </div>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Annuler</Button>
//             <Button type="submit" variant="contained">
//               Ajouter
//             </Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </>
//   );
// }

import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchContracts } from "../redux/slices/contractSlice";

export default function FormDialogContrat() {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);

  const [selectedOperateur, setSelectedOperateur] = useState("");
  const [selectedLoyer, setSelectedLoyer] = useState("");

  const [loadingOperateurs, setLoadingOperateurs] = useState(false);
  const [codeOperateurList, setCodeOperateurList] = useState<
    { CODE_OPERATEUR: string }[]
  >([]);

  const [loadingLoyers, setLoadingLoyers] = useState(false);
  const [codeLoyerList, setCodeLoyerList] = useState<
    { CODE_LOYER: string }[]
  >([]);

  const [typePaiement, setTypePaiement] = useState<string>("");
    const handleClose = () => {
    setOpen(false);
    };

 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoadingOperateurs(true);
      setLoadingLoyers(true);

      const [opeRes, loyerRes] = await Promise.all([
        axios.get("http://localhost:5000/api/operateurs/codes"),
        axios.get("http://localhost:5000/api/loyers/codes"),
      ]);

      console.log("Opérateurs:", opeRes.data); // 👈 check ici
      console.log("Loyers:", loyerRes.data);   // 👈 check ici

      setCodeOperateurList(opeRes.data);
      setCodeLoyerList(loyerRes.data);
    } catch (err) {
      console.error("Erreur chargement données", err);
    } finally {
      setLoadingOperateurs(false);
      setLoadingLoyers(false);
    }
  };

  fetchData();
}, []);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const payload = {
    num: formData.get("CODE_CONTRAT"), // matches your input name
    codeOperateur: selectedOperateur,  // camelCase
    codeLoyer: selectedLoyer,           // camelCase
    typePaiement: typePaiement,         // camelCase
    dateFacturation: formData.get("DATE_FACTURATION"),
    dateVigeur: formData.get("DATE_VIGEUR"),
    dateFin: formData.get("DATE_FIN"),
  };

  try {
    await axios.post("http://localhost:5000/api/addContrat", payload);
    dispatch(fetchContracts());
    handleClose();
  } catch (err) {
    console.error("Erreur lors de l'ajout du contrat", err);
  }
};

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Contrat
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Ajouter un Contrat</DialogTitle>
          <DialogContent>
            <div className="flex mb-4">
              <FormControl fullWidth className="mr-4 mt-4" disabled={loadingOperateurs}>
                <InputLabel>Code Opérateur</InputLabel>
                <Select
                  label="Opérateur"
                  value={selectedOperateur}
                  onChange={(e) => setSelectedOperateur(e.target.value)}
                  required
                >
                  <MenuItem value="" disabled>
                    Sélectionner un opérateur
                  </MenuItem>
                  {codeOperateurList.map((op) => (
                    <MenuItem key={op} value={op}>
                      {op}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth className="mr-4 mt-4">
                <InputLabel>Type de Paiement</InputLabel>
                <Select
                  value={typePaiement}
                  onChange={(e: SelectChangeEvent) => setTypePaiement(e.target.value)}
                  label="Type de Paiement"
                  required
                >
                  <MenuItem value="mensuel">Mensuel</MenuItem>
                  <MenuItem value="trimestriel">Trimestriel</MenuItem>
                  <MenuItem value="annuel">Annuel</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className="mr-4 mt-4" disabled={loadingLoyers}>
                <InputLabel>Code Loyer</InputLabel>
                <Select
                  value={selectedLoyer}
                  onChange={(e) => setSelectedLoyer(e.target.value)}
                  label="Code Loyer"
                  required
                >
                  <MenuItem value="" disabled>
                    Sélectionner un loyer
                  </MenuItem>
                  {codeLoyerList.map((loyer) => (
                    <MenuItem key={loyer} value={loyer}>
                      {loyer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="flex">
              <TextField
                label="Code Contrat"
                name="CODE_CONTRAT"
                fullWidth
                required
                className="mr-4"
              />
              <TextField
                label="Date de Facturation"
                name="DATE_FACTURATION"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <div className="flex mt-4">
              <TextField
                label="Date Vigueur"
                name="DATE_VIGEUR"
                type="date"
                fullWidth
                required
                className="mr-4"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Date Fin"
                name="DATE_FIN"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button type="submit" variant="contained">
              Ajouter
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
