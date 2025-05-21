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

interface ModifyLoyerProps {
  loyer: {
    CODE_LOYER: string;
    CODE_STATION: string;
    SURFACE: number;
    MONTANT: number;
    ETAT: number;
  };
}

const ModifyLoyer: React.FC<ModifyLoyerProps> = ({ loyer }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    CODE_LOYER: loyer.CODE_LOYER,
    CODE_STATION: loyer.CODE_STATION,
    SURFACE: loyer.SURFACE,
    MONTANT: loyer.MONTANT,
    ETAT: loyer.ETAT,
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
      const response = await fetch(`http://localhost:5000/api/updateLoyer/${loyer.CODE_LOYER}`, {
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
        console.error('Failed to update loyer');
      }
    } catch (error) {
      console.error('Error updating loyer:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this loyer?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/deleteLoyer/${loyer.CODE_LOYER}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          window.location.reload();
        } else {
          console.error('Failed to delete loyer');
        }
      } catch (error) {
        console.error('Error deleting loyer:', error);
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
        <DialogTitle>Modifier Local</DialogTitle>
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
            />
            <TextField
              margin="dense"
              name="SURFACE"
              label="Surface"
              type="number"
              fullWidth
              value={formData.SURFACE}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="MONTANT"
              label="Montant"
              type="number"
              fullWidth
              value={formData.MONTANT}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="ETAT"
              label="État"
              type="number"
              fullWidth
              value={formData.ETAT}
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

export default ModifyLoyer;
