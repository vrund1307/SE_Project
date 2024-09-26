import React from 'react';
import { Grid, Box, Typography, Button, Card, CardContent, Avatar, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const FeePayments = () => {
  const [selectedFee, setSelectedFee] = React.useState('');

  const handleFeeChange = (event) => {
    setSelectedFee(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      {/* Fee Payments Heading */}
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
        Fee Payments
      </Typography>

      {/* Dropdown in the Middle */}
      <FormControl sx={{ minWidth: 200, marginBottom: 5 }}>
        <InputLabel id="fee-select-label">Select Fee Type</InputLabel>
        <Select
          labelId="fee-select-label"
          id="fee-select"
          value={selectedFee}
          label="Select Fee Type"
          onChange={handleFeeChange}
        >
          <MenuItem value="tuition">Tuition Fee</MenuItem>
          <MenuItem value="hostel">Hostel Fee</MenuItem>
          <MenuItem value="medical">Medical Fee</MenuItem>
        </Select>
      </FormControl>

      {/* Cards Section */}
      <Grid container spacing={3} justifyContent="center">
        {/* Tuition Fee Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#1976d2', margin: '0 auto', marginBottom: 2 }}>
                <SchoolIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Tuition Fee
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Pay your tuition fees conveniently online.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Hostel Fee Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#1976d2', margin: '0 auto', marginBottom: 2 }}>
                <HomeIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Hostel Fee
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Secure your hostel accommodation by paying the fee.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Medical Fee Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: '#1976d2', margin: '0 auto', marginBottom: 2 }}>
                <LocalHospitalIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Medical Fee
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Ensure access to medical facilities by paying the medical fee.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeePayments;
