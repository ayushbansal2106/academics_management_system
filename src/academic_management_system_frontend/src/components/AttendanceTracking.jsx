import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Box,
  Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AttendanceTracking = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'John Doe', rollNo: 'A001', status: true },
    { id: 2, name: 'Jane Smith', rollNo: 'A002', status: true },
    { id: 3, name: 'Bob Wilson', rollNo: 'A003', status: false },
  ]);
  const [saved, setSaved] = useState(false);

  const classes = [
    'Class A - Computer Science',
    'Class B - Information Technology',
    'Class C - Data Science',
  ];

  const handleAttendanceChange = (studentId) => {
    setAttendanceData(attendanceData.map(student =>
      student.id === studentId
        ? { ...student, status: !student.status }
        : student
    ));
  };

  const handleSaveAttendance = () => {
    // Save attendance logic here
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const getAttendanceStats = () => {
    const total = attendanceData.length;
    const present = attendanceData.filter(student => student.status).length;
    return {
      present,
      absent: total - present,
      percentage: ((present / total) * 100).toFixed(1)
    };
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Attendance Management
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Select Class</InputLabel>
                    <Select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      label="Select Class"
                    >
                      {classes.map((cls) => (
                        <MenuItem key={cls} value={cls}>
                          {cls}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </Grid>
              </Grid>

              {saved && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Attendance saved successfully!
                </Alert>
              )}

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Roll No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Present</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {attendanceData.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell align="center">
                          <Checkbox
                            checked={student.status}
                            onChange={() => handleAttendanceChange(student.id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Present
                      </Typography>
                      <Typography variant="h4">
                        {getAttendanceStats().present}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Absent
                      </Typography>
                      <Typography variant="h4">
                        {getAttendanceStats().absent}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Attendance Rate
                      </Typography>
                      <Typography variant="h4">
                        {getAttendanceStats().percentage}%
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  onClick={handleSaveAttendance}
                  disabled={!selectedClass}
                >
                  Save Attendance
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default AttendanceTracking;
