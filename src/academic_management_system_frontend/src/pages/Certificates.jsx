import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [certificates, setCertificates] = useState([
    { id: 1, studentName: 'John Doe', course: 'Computer Science', issueDate: '2024-01-15', certificateId: 'CERT001' },
    { id: 2, studentName: 'Jane Smith', course: 'Information Technology', issueDate: '2024-01-20', certificateId: 'CERT002' },
  ]);
  const [newCertificate, setNewCertificate] = useState({
    studentName: '',
    course: '',
    issueDate: '',
  });

  const handleGenerateCertificate = () => {
    setCertificates([
      ...certificates,
      {
        ...newCertificate,
        id: certificates.length + 1,
        certificateId: `CERT00${certificates.length + 1}`,
      },
    ]);
    setOpen(false);
    setNewCertificate({ studentName: '', course: '', issueDate: '' });
  };

  const [verificationId, setVerificationId] = useState('');

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Certificate Verification
            </Typography>
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="Enter Certificate ID"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
              />
              <Button variant="contained" startIcon={<VerifiedIcon />}>
                Verify
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5">Certificates</Typography>
            <Button
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              onClick={() => setOpen(true)}
            >
              Generate Certificate
            </Button>
          </Box>

          <Grid container spacing={3}>
            {certificates.map((cert) => (
              <Grid item xs={12} md={6} key={cert.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{cert.studentName}</Typography>
                    <Typography color="textSecondary">
                      Certificate ID: {cert.certificateId}
                    </Typography>
                    <Typography>Course: {cert.course}</Typography>
                    <Typography>Issue Date: {cert.issueDate}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<PictureAsPdfIcon />}>
                      Download
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Generate New Certificate</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            fullWidth
            value={newCertificate.studentName}
            onChange={(e) => setNewCertificate({ ...newCertificate, studentName: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Course</InputLabel>
            <Select
              value={newCertificate.course}
              label="Course"
              onChange={(e) => setNewCertificate({ ...newCertificate, course: e.target.value })}
            >
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Information Technology">Information Technology</MenuItem>
              <MenuItem value="Data Science">Data Science</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Issue Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newCertificate.issueDate}
            onChange={(e) => setNewCertificate({ ...newCertificate, issueDate: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleGenerateCertificate}>Generate</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Students;
