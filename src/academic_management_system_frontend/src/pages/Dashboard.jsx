import React from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

const DashboardCard = ({ title, value, icon }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Box display="flex" alignItems="center">
      {icon}
      <Box ml={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <DashboardCard 
            title="Total Students" 
            value="1,234"
            icon={<PersonIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard 
            title="Total Courses" 
            value="42"
            icon={<SchoolIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard 
            title="Certificates Issued" 
            value="856"
            icon={<DescriptionIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
