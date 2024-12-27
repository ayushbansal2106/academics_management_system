import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Box,
  IconButton,
  Toolbar,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const Students = () => {
  // Sample student data - replace with actual data from your backend
  const [students] = useState([
    {
      id: 1,
      rollNo: "2024001",
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      year: "2nd Year",
    },
    {
      id: 2,
      rollNo: "2024002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      course: "Electrical Engineering",
      year: "1st Year",
    },
    // Add more sample data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    Object.values(student).some(
      (value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleEdit = (id) => {
    // Add edit functionality
    console.log('Edit student with ID:', id);
  };

  const handleDelete = (id) => {
    // Add delete functionality
    console.log('Delete student with ID:', id);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Students Management</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => console.log('Add new student')}
          >
            Add Student
          </Button>
        </Box>

        {/* Search Toolbar */}
        <Toolbar
          sx={{
            p: 0,
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search students..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </Box>
        </Toolbar>

        {/* Students Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Roll No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Year</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.year}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(student.id)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(student.id)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {filteredStudents.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="body1" color="text.secondary">
              No students found
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Students;
