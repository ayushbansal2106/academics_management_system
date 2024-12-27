import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Search,
  Upload,
  Download,
  Delete,
  Description,
} from '@mui/icons-material';

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openUpload, setOpenUpload] = useState(false);
  const [newDocument, setNewDocument] = useState({
    name: '',
    category: '',
    file: null,
  });

  // Sample categories - replace with your actual categories
  const categories = [
    'Assignments',
    'Study Materials',
    'Syllabi',
    'Exam Papers',
    'Others'
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setNewDocument({
      ...newDocument,
      file: file
    });
  };

  const handleUpload = () => {
    const newDoc = {
      id: documents.length + 1,
      name: newDocument.name,
      category: newDocument.category,
      type: newDocument.file.type,
      size: `${(newDocument.file.size / 1024).toFixed(2)} KB`,
      uploadedDate: new Date().toISOString().split('T')[0],
    };
    setDocuments([...documents, newDoc]);
    setOpenUpload(false);
    setNewDocument({ name: '', category: '', file: null });
  };

  const handleDelete = (documentId) => {
    setDocuments(documents.filter(doc => doc.id !== documentId));
  };

  const handleDownload = (document) => {
    // Implement download logic here
    console.log('Downloading:', document.name);
  };

  const filteredDocuments = documents.filter(doc => 
    (selectedCategory === 'all' || doc.category === selectedCategory) &&
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Grid container spacing={2} alignItems="center" mb={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h5">Document Management</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: <Search color="action" sx={{ mr: 1 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    label="Category"
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Upload />}
                  onClick={() => setOpenUpload(true)}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>

            <List>
              {filteredDocuments.map((doc) => (
                <ListItem
                  key={doc.id}
                  sx={{
                    mb: 1,
                    bgcolor: '#f5f5f5',
                    borderRadius: 1,
                  }}
                  secondaryAction={
                    <>
                      <IconButton onClick={() => handleDownload(doc)}>
                        <Download />
                      </IconButton>
                      <IconButton 
                        color="error"
                        onClick={() => handleDelete(doc.id)}
                      >
                        <Delete />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.name}
                    secondary={
                      <>
                        <Chip
                          label={doc.category}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        {`${doc.type} • ${doc.size} • Uploaded: ${doc.uploadedDate}`}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            
            {filteredDocuments.length === 0 && (
              <Typography variant="body1" sx={{ textAlign: 'center', py: 3 }}>
                No documents found
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openUpload} onClose={() => setOpenUpload(false)}>
        <DialogTitle>Upload Document</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Document Name"
            value={newDocument.name}
            onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
            sx={{ mb: 2, mt: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={newDocument.category}
              onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value })}
              label="Category"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            accept="*/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={handleFileSelect}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="outlined"
              component="span"
              startIcon={<Upload />}
              fullWidth
            >
              Select File
            </Button>
          </label>
          {newDocument.file && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {newDocument.file.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpload(false)}>Cancel</Button>
          <Button
            onClick={handleUpload}
            variant="contained"
            disabled={!newDocument.name || !newDocument.category || !newDocument.file}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DocumentManagement;
