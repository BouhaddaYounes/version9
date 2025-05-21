import "./styles.css";
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/login';
import Home from './pages/home/Home';
import Liste from './pages/liste/Liste';
import Auto from './pages/autorisation/Autorisation';
import {
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f4f5fd"
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transform: "translateZ(0)"
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

const App: React.FC = () => {
  const user = localStorage.getItem('profile');

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/liste" element={user ? <Liste /> : <Navigate to="/" />} />
          <Route path="/autorisation" element={user ? <Auto /> : <Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
