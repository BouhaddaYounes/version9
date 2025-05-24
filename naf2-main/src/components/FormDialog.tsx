import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStation } from "../redux/slices/stationSlice"; // adjust path if needed
import type { AppDispatch } from "../redux/store";


import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface Station {
  CODE_STATION?: string;
  NOM_STATION: string;
  NBR_LOYER?: string;
  ADRESSE_STATION?: string;
  ETATS: string;
  TYPE_ACTIVITE: string;
  CODE_DISTRICT: string;
  Wilaya: string;
}

const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa",
  "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa",
  "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel",
  "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "MSila", "Mascara", "Ouargla",
  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdès",
  "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras",
  "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa",
  "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal",
  "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet",
  "El M'Ghair", "El Meniaa"
];
export default function FormDialog() {
  const dispatch = useDispatch<AppDispatch>();
  

  const [station, setStation] = useState<Station>({
    NOM_STATION: "",
    NBR_LOYER: "",
    ETATS: "0",
    TYPE_ACTIVITE: "0",
    CODE_DISTRICT: "",
    Wilaya: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field: keyof Station) => (event: React.ChangeEvent<{ value: unknown }>) => {
    setStation(prev => ({ ...prev, [field]: event.target.value as string }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);
  try {
    console.log("Submitting:", station);
    await dispatch(addStation(station)).unwrap(); // this will call the axios.post()
    handleClose();
  } catch (err: any) {
    console.error("Erreur:", err);
    alert("Une erreur est survenue lors de l'ajout de la station.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        + Station
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Ajouter une station</DialogTitle>
          <DialogContent>
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <TextField
                required
                label="Nom station"
                variant="standard"
                fullWidth
                value={station.NOM_STATION}
                onChange={handleChange("NOM_STATION")}
              />
              <TextField
                label="Nombre de loyers"
                type="number"
                variant="standard"
                fullWidth
                value={station.NBR_LOYER}
                onChange={handleChange("NBR_LOYER")}
              />
            </div>

            <FormControl fullWidth margin="normal" disabled={loading}>
              <InputLabel>District</InputLabel>
              <Select
                value={station.CODE_DISTRICT}
                onChange={(e) =>
                  setStation({ ...station, CODE_DISTRICT: e.target.value as string })
                }
                label="District"
              >
                {["A01", "O02", "C03", "A04", "S05", "T06", "B07", "B08"].map(code => (
                  <MenuItem key={code} value={code}>
                    {code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" disabled={loading}>
              <InputLabel>Wilaya</InputLabel>
              <Select
                value={station.Wilaya}
                onChange={(e) =>
                  setStation({ ...station, Wilaya: e.target.value as string })
                }
                label="Wilaya"
              >
                {wilayas.map(w => (
                  <MenuItem key={w} value={w}>
                    {w}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" disabled={loading}>
              <InputLabel>État</InputLabel>
              <Select
                value={station.ETATS}
                onChange={(e) =>
                  setStation({ ...station, ETATS: e.target.value as string })
                }
                label="État"
              >
                <MenuItem value="0">Rénovation</MenuItem>
                <MenuItem value="1">Fermé</MenuItem>
                <MenuItem value="2">Opérationnel</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" disabled={loading}>
              <InputLabel>Activité</InputLabel>
              <Select
                value={station.TYPE_ACTIVITE}
                label="Activité"
                onChange={(e) =>
                  setStation({ ...station, TYPE_ACTIVITE: e.target.value as string })
                }
              >
                <MenuItem value="1">HF</MenuItem>
                <MenuItem value="2">ABS</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} disabled={loading}>
              Annuler
            </Button>
            <Button type="submit" disabled={loading}>
              Ajouter
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
