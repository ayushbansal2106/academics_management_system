import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Install recharts: npm install recharts

const AnalyticsDashboard = () => {
  const performanceData = [
    { subject: 'Mathematics', avgScore: 75, passingRate: 82 },
    { subject: 'Physics', avgScore: 68, passingRate: 75 },
    { subject: 'Chemistry', avgScore: 72, passingRate: 78 },
    { subject: 'Biology', avgScore: 80, passingRate: 88 },
    { subject: 'English', avgScore: 85, passingRate: 92 },
  ];

  const attendanceData = [
    { month: 'Jan', attendance: 88 },
    { month: 'Feb', attendance: 85 },
    { month: 'Mar', attendance: 90 },
    { month: 'Apr', attendance: 87 },
    { month: 'May', attendance: 84 },
  ];

  const gradeDistribution = [
    { grade: 'A', value: 30 },
    { grade: 'B', value: 40 },
    { grade: 'C', value: 20 },
    { grade: 'D', value: 8 },
    { grade: 'F', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Performance Analytics
      </Typography>
      
      <Grid container spacing={3}>
        {/* Subject Performance Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Subject-wise Performance
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={performanceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgScore" fill="#8884d8" name="Average Score" />
              <Bar dataKey="passingRate" fill="#82ca9d" name="Passing Rate %" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Attendance Trend Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Attendance Trend
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={attendanceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#8884d8"
                name="Attendance %"
              />
            </LineChart>
          </Paper>
        </Grid>

        {/* Grade Distribution Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Grade Distribution
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={gradeDistribution}
                cx={250}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Key Metrics */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Key Metrics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box p={2} bgcolor="#f5f5f5" borderRadius={1}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Overall Pass Rate
                  </Typography>
                  <Typography variant="h4">85%</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2} bgcolor="#f5f5f5" borderRadius={1}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Average Attendance
                  </Typography>
                  <Typography variant="h4">88%</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2} bgcolor="#f5f5f5" borderRadius={1}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Top Performing Subject
                  </Typography>
                  <Typography variant="h6">English</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2} bgcolor="#f5f5f5" borderRadius={1}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Students at Risk
                  </Typography>
                  <Typography variant="h4">12</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsDashboard;
