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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ModifyOperateurProps {
  operateur: {
    CODE_OPERATEUR: string;
    RAISON_SOCIAL: string;
    ADRESSE: string;
    TEL: string;
    DOMICILIATION: string;

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
    DOMICILIATION: operateur.DOMICILIATION,

    NIF: operateur.NIF,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/updateOperateur/${operateur.CODE_OPERATEUR}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
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

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this operateur?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/deleteOperateur/${operateur.CODE_OPERATEUR}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          window.location.reload();
        } else {
          console.error('Failed to delete operateur');
        }
      } catch (error) {
        console.error('Error deleting operateur:', error);
      }
    }
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen} color="primary">
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete} color="error">
        <DeleteIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier Opérateur</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              margin="dense"
              name="CODE_OPERATEUR"
              label="Code Opérateur"
              type="text"
              fullWidth
              value={formData.CODE_OPERATEUR}
              onChange={handleChange}
              disabled
            />
            <TextField
              margin="dense"
              name="RAISON_SOCIAL"
              label="Raison Social"
              type="text"
              fullWidth
              value={formData.RAISON_SOCIAL}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="ADRESSE"
              label="Adresse"
              type="text"
              fullWidth
              value={formData.ADRESSE}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="TEL"
              label="Téléphone"
              type="text"
              fullWidth
              value={formData.TEL}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="DOMICILIATION"
              label="Domiciliation"
              type="text"
              fullWidth
              value={formData.DOMICILIATION}
              onChange={handleChange}
            />
            
            <TextField
              margin="dense"
              name="NIF"
              label="NIF"
              type="text"
              fullWidth
              value={formData.NIF}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModifyOperateur;
