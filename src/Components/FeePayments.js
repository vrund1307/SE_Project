import React, { useState } from 'react';
import { Grid, Typography, Fab, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import FeeCard from './FeeCard'; // Ensure you have this import

const FeePayments = () => {
  const [semester, setSemester] = useState('');

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fees = [
    { id: 1, type: 'Tuition', remainingDays: 15, icon: 'school' },
    { id: 2, type: 'Hostel', remainingDays: 30, icon: 'house' },
    { id: 3, type: 'Medical', remainingDays: 5, icon: 'local_hospital' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Fee Payment
      </Typography>

      <FormControl fullWidth style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        {/* <InputLabel id="semester-select-label">Select Semester</InputLabel> */}
        <Select
          labelId="semester-select-label"
          value={semester}
          onChange={handleSemesterChange}
          style={{ width: '300px', textAlign: 'center' }} // Center the dropdown
        >
          <MenuItem value={1}>Semester 1</MenuItem>
          <MenuItem value={2}>Semester 2</MenuItem>
          <MenuItem value={3}>Semester 3</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} justifyContent="center">
        {fees.map(fee => (
          <Grid item xs={12} md={4} key={fee.id}>
            <FeeCard fee={fee} />
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        aria-label="pay"
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <PaymentIcon />
      </Fab>
    </div>
  );
};

export default FeePayments;
