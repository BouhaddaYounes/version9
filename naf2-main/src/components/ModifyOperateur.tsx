import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ModifyOperateurProps {
  operateur: {
    CODE_OPERATEUR: string;
    RAISON_SOCIAL: string;
    ADRESSE: string;
    TEL: string;
    BANQUE: string;
    NIF: string;
  };
}

const ModifyOperateur: React.FC<ModifyOperateurProps> = ({ operateur }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    CODE_OPERATEUR: operateur.CODE_OPERATEUR,
    RAISON_SOCIAL: operateur.RAISON_SOCIAL,
    ADRESSE: operateur.ADRESSE,
    TEL: operateur.TEL,
    BANQUE: operateur.BANQUE,
    NIF: operateur.NIF,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('CODE_OPERATEUR:', operateur.CODE_OPERATEUR);

      const response = await fetch(`http://localhost:5000/api/updateOperateur/${operateur.CODE_OPERATEUR}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleClose();
        window.location.reload();
      } else {
        console.error('Failed to update operateur');
      }
    } catch (error) {
      console.error('Error updating operateur:', error);
    }
  };

  // const handleDelete = async () => {
  //   if (window.confirm('Are you sure you want to delete this operateur?')) {
  //     try {
  //       const response = await fetch(`http://localhost:5000/api/deleteOperateur/${operateur.CODE_OPERATEUR}`, {
  //         method: 'DELETE',
  //       });

  //       if (response.ok) {
  //         window.location.reload();
  //       } else {
  //         console.error('Failed to delete operateur');
  //       }
  //     } catch (error) {
  //       console.error('Error deleting operateur:', error);
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
        <DialogTitle>Modifier Opérateur</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField name="CODE_OPERATEUR" label="Code Opérateur" fullWidth disabled value={formData.CODE_OPERATEUR} />
            <TextField name="RAISON_SOCIAL" label="Raison Social" fullWidth disabled value={formData.RAISON_SOCIAL} />
            <TextField name="ADRESSE" label="Adresse" fullWidth disabled value={formData.ADRESSE} />
            <TextField name="TEL" label="Téléphone" fullWidth value={formData.TEL} onChange={handleChange} />
            <TextField name="BANQUE" label="Banque" fullWidth value={formData.BANQUE} onChange={handleChange} />
            <TextField name="NIF" label="NIF" fullWidth disabled value={formData.NIF} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Annuler</Button>
          <Button onClick={handleSubmit} color="primary">Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModifyOperateur;
