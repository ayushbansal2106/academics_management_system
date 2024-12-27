import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';

const StudentProfile = ({ studentId }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const studentData = {
    name: 'John Doe',
    rollNo: 'A001',
    course: 'Computer Science',
    year: '2024',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 College Street, City, Country',
    performance: [
      { subject: 'Data Structures', score: 85 },
      { subject: 'Algorithms', score: 78 },
      { subject: 'Database Management', score: 92 },
    ],
    attendance: 85,
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3}>
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{ width: 150, height: 150, mb: 2 }}
                  src="/path-to-student-image.jpg"
                />
                <Typography variant="h5">{studentData.name}</Typography>
                <Typography color="textSecondary">{studentData.rollNo}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
                <Tab label="Details" />
                <Tab label="Performance" />
                <Tab label="Attendance" />
              </Tabs>
              <Box mt={2}>
                {tabValue === 0 && (
                  <List>
                    <ListItem>
                      <ListItemText primary="Course" secondary={studentData.course} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Year" secondary={studentData.year} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Email" secondary={studentData.email} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Phone" secondary={studentData.phone} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Address" secondary={studentData.address} />
                    </ListItem>
                  </List>
                )}
                {tabValue === 1 && (
                  <Grid container spacing={2}>
                    {studentData.performance.map((subject) => (
                      <Grid item xs={12} key={subject.subject}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6">{subject.subject}</Typography>
                            <Box display="flex" alignItems="center" mt={1}>
                              <Box width="100%" mr={1}>
                                <LinearProgress
                                  variant="determinate"
                                  value={subject.score}
                                />
                              </Box>
                              <Box minWidth={35}>
                                <Typography variant="body2">
                                  {subject.score}%
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
                {tabValue === 2 && (
                  <Box p={2}>
                    <Typography variant="h6" gutterBottom>
                      Overall Attendance
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Box width="100%" mr={1}>
                        <LinearProgress
                          variant="determinate"
                          value={studentData.attendance}
                          color={studentData.attendance >= 75 ? "success" : "error"}
                        />
                      </Box>
                      <Box minWidth={35}>
                        <Typography variant="body2">
                          {studentData.attendance}%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentProfile;
