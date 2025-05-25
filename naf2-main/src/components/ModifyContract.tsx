import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { IconButton, MenuItem } from "@mui/material";
import { data } from "react-router-dom";

// Define props type
interface ModifyContractProps {
  contractId: number;
}

const ModifyContract: React.FC<ModifyContractProps> = ({ contractId }) => {
  const [open, setOpen] = React.useState(false);

  const [Activite, setActivite] = React.useState({
    CODE_STATION: "",
    CODE_LOYER: "",
    TYPE_LOYER: "",
    DATE_FACTURATION: "",
    DATE_VIGEUR: "",
    DATE_FIN: "",
  });

  const handleClickOpen = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/getContratById/${contractId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch contract data");
    }
    const jsonData = await response.json();
    const contractData = jsonData[0]; // الوصول لأول عنصر في المصفوفة

    setActivite({
      CODE_STATION: contractData.CODE_STATION || "",
      CODE_LOYER: contractData.CODE_LOYER || "",
      TYPE_LOYER: contractData.OBJET || "", // لاحظ أن "TYPE_LOYER" غير موجود، استبدله بـ OBJET
      DATE_FACTURATION: contractData.DATE_FACTURATION || "",
      DATE_VIGEUR: contractData.DATE_VIGEUR || "",
      DATE_FIN: contractData.DATE_FIN || "",
    });


    setOpen(true);
  } catch (error) {
    console.error("Error fetching contract:", error);
  }
};


  const handleClose = () => {
    setOpen(false);
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>détail de contrat</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>

          <div className="flex mb-2">
            <div className="mr-7 mt-4">
              <TextField
                className="w-65"
                label="CODE STATION"
                name="CODE_STATION"
                focused
                value={Activite.CODE_STATION} // Use data from the fetched contract
                onChange={(e) =>
                  setActivite({ ...Activite, CODE_STATION: e.target.value })
                }
                disabled
              />
            </div>
            <div className="mr-4 mt-4">
              <TextField
                className="w-65"
                label="CODE LOYER"
                name="CODE_LOYER"
                focused
                value={Activite.CODE_LOYER}
                onChange={(e) =>
                  setActivite({ ...Activite, CODE_LOYER: e.target.value })
                }
                disabled
              />
              
            </div>
          </div>

          <div className="flex mb-2">
            {/* <div className="mt-4 mr-2 w-65">
              <TextField
                label="TYPE LOYER"
                focused
                fullWidth
                value={Activite.TYPE_LOYER}
                onChange={(e) =>
                  setActivite({ ...Activite, TYPE_LOYER: e.target.value })
                }
                disabled
                
              />
              
            </div> */}
            <div className="mt-4 w-65">
              <TextField
                label="DATE FACTURATION"
                focused
                fullWidth
                value={Activite.DATE_FACTURATION}
                onChange={(e) =>
                  setActivite({ ...Activite, DATE_FACTURATION: e.target.value })
                }
                disabled
              />
            </div>
          </div>

          <div className="flex mb-2">
            <div className="mt-4 mr-2 w-65">
              <TextField
                label="DATE VIGEUR"
                focused
                fullWidth
                value={Activite.DATE_VIGEUR}
                onChange={(e) =>
                  setActivite({ ...Activite, DATE_VIGEUR: e.target.value })
                }
                disabled
              />
            </div>
            <div className="mt-4 ml-4 w-65">
              <TextField
                label="DATE FIN"
                focused
                fullWidth
                value={Activite.DATE_FIN}
                onChange={(e) =>
                  setActivite({ ...Activite, DATE_FIN: e.target.value })
                }
                disabled
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="mr-5 mb-4">
            <Button onClick={handleClose}>Fermer</Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModifyContract;
