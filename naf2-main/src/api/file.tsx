import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StationById, updateStation } from '../StoreData/Action/station';
import { ADBoutique } from '../StoreData/Action/loyer';
import { getAllStation } from '../StoreData/Action/station';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
  Select,
  MenuItem,
  useMediaQuery,
  SelectChangeEvent,
} from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';

interface StationFormProps {
  id: string;
}

interface FormValues {
  CODE_STATION: string;
  ETATS: string;
  NOM_STATION: string;
  CODE_DISTRICT: string;
  CODE_WILAYA: string;
  [key: string]: string; // For any additional fields
}

interface FormErrors {
  [key: string]: string;
}

const StationForm: React.FC<StationFormProps> = ({ id }) => {
  console.log(id);
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [v, setV] = useState<string>(id);
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [submittedLabel, setSubmittedLabel] = useState<string>('');
  const [postData, setPostData] = useState<FormValues>({
    CODE_STATION: "",
    ETATS: '',
    NOM_STATION: "",
    CODE_DISTRICT: "",
    CODE_WILAYA: "",
  });

  // Add your form handling logic here with proper TypeScript types
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Your submit logic here
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Formik
      initialValues={postData}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, isSubmitting }) => (
        <form noValidate onSubmit={handleSubmit}>
          {/* Add your form fields here */}
        </form>
      )}
    </Formik>
  );
};

export default StationForm;
