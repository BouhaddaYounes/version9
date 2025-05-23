import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  // Checkbox,
  // FormControlLabel,
  // Link,
  Paper,
  // Grid,
  Alert
} from '@mui/material';

// function LoginPage() {
//   const [error, setError] = React.useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//     // Add authentication logic here
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Paper elevation={3} sx={{ p: 3, mt: 2, width: '100%' }}>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             {error && <Alert severity="error">{error}</Alert>}
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
           
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
            
//           </Box>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }

// export default LoginPage;

// If you have a LoginForm component, ensure it exists at src/components/LoginForm.tsx or .jsx
// Otherwise, use the previously commented LoginPage code directly:

import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2  bg-gray-100">
        <LoginForm />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center   bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10" />
      </div>
    </div>
  );
};

export default Login;