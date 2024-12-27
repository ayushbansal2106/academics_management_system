import React from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import {
  People as PeopleIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  EventNote as EventNoteIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  // Sample data - replace with actual data from your backend
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: "Total Courses",
      value: "42",
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
    {
      title: "Assignments",
      value: "156",
      icon: <AssignmentIcon sx={{ fontSize: 40, color: 'success.main' }} />,
    },
    {
      title: "Events",
      value: "8",
      icon: <EventNoteIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Card */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome to the Academic Management System
            </Typography>
          </Paper>
        </Grid>

        {/* Statistics Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
                    {stat.value}
                  </Typography>
                </Box>
                <Box sx={{ ml: 'auto' }}>
                  {stat.icon}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Recent Activities" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                • New student registration completed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Assignment deadline updated for CS101
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • New course materials uploaded
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Upcoming Events" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                • Mid-term Examinations (Next Week)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Annual Sports Day (Dec 15)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Parent-Teacher Meeting (Dec 20)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
