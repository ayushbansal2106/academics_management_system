import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show navbar on login page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Academic Management System
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/students')}>
            Students
          </Button>
          <Button color="inherit" onClick={() => navigate('/documents')}>
            Documents
          </Button>
          <Button color="inherit" onClick={() => navigate('/attendance')}>
            Attendance
          </Button>
          <Button color="inherit" onClick={() => navigate('/')}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
