import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

const BatchOperations = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [processingStatus, setProcessingStatus] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    // Simulate file reading
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n').slice(0, 5); // Preview first 5 rows
      setPreviewData(rows);
      setOpenPreview(true);
    };
    reader.readAsText(file);
  };

  const handleUpload = () => {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
        setProcessingStatus('success');
      }
    }, 500);
  };

  const generateSampleTemplate = () => {
    const template = 'Name,Roll No,Course,Year,Email\nJohn Doe,A001,CS,2024,john@example.com';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_template.csv';
    a.click();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Batch Student Import
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Button
                variant="outlined"
                onClick={generateSampleTemplate}
                startIcon={<DownloadIcon />}
              >
                Download Template
              </Button>
            </Box>

            <Box sx={{ mb: 3 }}>
              <input
                accept=".csv"
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                onChange={handleFileSelect}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload CSV File
                </Button>
              </label>
              {selectedFile && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected file: {selectedFile.name}
                </Typography>
              )}
            </Box>

            {uploadProgress > 0 && (
              <Box sx={{ mb: 3 }}>
                <LinearProgress variant="determinate" value={uploadProgress} />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Processing: {uploadProgress}%
                </Typography>
              </Box>
            )}

            {processingStatus === 'success' && (
              <Alert severity="success">
                File processed successfully! Students imported to the system.
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Batch Certificate Generation
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<BatchPredictionIcon />}
                onClick={() => {
                  // Add batch certificate generation logic
                }}
              >
                Generate Certificates
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Preview Dialog */}
      <Dialog open={openPreview} onClose={() => setOpenPreview(false)} maxWidth="md" fullWidth>
        <DialogTitle>Preview Data</DialogTitle>
        <DialogContent>
          <List>
            {previewData.map((row, index) => (
              <ListItem key={index}>
                <ListItemText primary={row} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPreview(false)}>Cancel</Button>
          <Button onClick={handleUpload} variant="contained" color="primary">
            Proceed with Import
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BatchOperations;
