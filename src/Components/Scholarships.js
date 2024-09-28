import React from 'react';
import { Grid, Box, Typography, Button, Card, CardContent, Avatar, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Scholarships = () => {
  const [selectedScholarship, setSelectedScholarship] = React.useState('');
  const handleScholarshipChange = (event) => {
    setSelectedScholarship(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
        Scholarships
      </Typography>
      <FormControl sx={{ minWidth: 200, marginBottom: 5 }}>
        <InputLabel id="scholarship-select-label">Select Scholarship Type</InputLabel>
        <Select
          labelId="scholarship-select-label"
          id="scholarship-select"
          value={selectedScholarship}
          label="Select Scholarship Type"
          onChange={handleScholarshipChange}
        >
          <MenuItem value="merit">Merit-Based</MenuItem>
          <MenuItem value="need">Need-Based</MenuItem>
          <MenuItem value="athletic">Athletic Scholarship</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, '&:hover': { backgroundColor: 'linear-gradient(135deg, #42a5f5, #1976d2)' } }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#1976d2', margin: '0 auto', marginBottom: 2 }}>
                <SchoolIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Merit-Based Scholarship
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Add similar cards for other scholarships */}
      </Grid>
    </Box>
  );
};

export default Scholarships;
