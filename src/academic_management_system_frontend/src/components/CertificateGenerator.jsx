import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    fontSize: 12,
    marginBottom: 20,
  },
});

const CertificateGenerator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [certificateData, setCertificateData] = useState({
    templateType: 'graduation',
    studentName: '',
    course: '',
    grade: '',
    issueDate: '',
    certificateNo: '',
  });

  const steps = ['Select Template', 'Enter Details', 'Preview & Generate'];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormControl fullWidth>
            <InputLabel>Certificate Template</InputLabel>
            <Select
              value={certificateData.templateType}
              onChange={(e) => setCertificateData({
                ...certificateData,
                templateType: e.target.value,
              })}
            >
              <MenuItem value="graduation">Graduation Certificate</MenuItem>
              <MenuItem value="course">Course Completion</MenuItem>
              <MenuItem value="achievement">Achievement Certificate</MenuItem>
            </Select>
          </FormControl>
        );

      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Name"
                value={certificateData.studentName}
                onChange={(e) => setCertificateData({
                  ...certificateData,
                  studentName: e.target.value,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Course"
                value={certificateData.course}
                onChange={(e) => setCertificateData({
                  ...certificateData,
                  course: e.target.value,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Grade"
                value={certificateData.grade}
                onChange={(e) => setCertificateData({
                  ...certificateData,
                  grade: e.target.value,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Issue Date"
                InputLabelProps={{ shrink: true }}
                value={certificateData.issueDate}
                onChange={(e) => setCertificateData({
                  ...certificateData,
                  issueDate: e.target.value,
                })}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Box sx={{ height: 500 }}>
            <PDFViewer width="100%" height="100%">
              <Document>
                <Page size="A4" style={styles.page}>
                  <View>
                    <Text style={styles.title}>
                      {certificateData.templateType.toUpperCase()} CERTIFICATE
                    </Text>
                    <Text style={styles.content}>
                      This is to certify that
                    </Text>
                    <Text style={styles.content}>
                      {certificateData.studentName}
                    </Text>
                    <Text style={styles.content}>
                      has successfully completed the course
                    </Text>
                    <Text style={styles.content}>
                      {certificateData.course}
                    </Text>
                    <Text style={styles.content}>
                      with grade: {certificateData.grade}
                    </Text>
                    <Text style={styles.content}>
                      Date: {certificateData.issueDate}
                    </Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2, mb: 2 }}>
          {renderStepContent(activeStep)}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          {activeStep > 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? undefined : handleNext}
            disabled={activeStep === steps.length}
          >
            {activeStep === steps.length - 1 ? 'Generate' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CertificateGenerator;
