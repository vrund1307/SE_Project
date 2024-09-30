import React, { useState } from 'react';
import { Grid, Typography, Fab, FormControl, Select, MenuItem } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import FeeCard from './FeeCard'; // Ensure you have this import

const FeePayments = () => {
  const [semester, setSemester] = useState('');
  const [scholarship, setScholarship] = useState('');

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleScholarshipChange = (event) => {
    setScholarship(event.target.value);
  };

  const fees = [
    { id: 1, type: 'Tuition', remainingDays: 15, icon: 'school', amount: 1000, details: 'Tuition fee for the semester' },
    { id: 2, type: 'Hostel', remainingDays: 30, icon: 'house', amount: 500, details: 'Hostel accommodation fee' },
    { id: 3, type: 'Medical', remainingDays: 5, icon: 'local_hospital', amount: 200, details: 'Medical insurance fee' },
  ];

  const scholarships = [
    {
      id: 1,
      type: 'Merit Scholarship',
      remainingDays: 20,
      icon: 'school',
      amount: 300,
      details: 'Awarded to students with a GPA of 3.5 and above.',
      eligibility: 'Top 10% of the class',
      applicationDeadline: 'May 15, 2024',
    },
    {
      id: 2,
      type: 'Need-based Scholarship',
      remainingDays: 10,
      icon: 'local_hospital',
      amount: 250,
      details: 'Financial aid for students with demonstrated financial need.',
      eligibility: 'Income below $50,000 per year',
      applicationDeadline: 'June 30, 2024',
    },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Fee Payment
      </Typography>

      <FormControl fullWidth style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <Select
          labelId="semester-select-label"
          value={semester}
          onChange={handleSemesterChange}
          style={{ width: '300px', textAlign: 'center' }}
        >
          <MenuItem value={1}>Semester 1</MenuItem>
          <MenuItem value={2}>Semester 2</MenuItem>
          <MenuItem value={3}>Semester 3</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5" gutterBottom textAlign="center">
        Fees
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {fees.map(fee => (
          <Grid item xs={12} md={4} key={fee.id}>
            <FeeCard fee={fee} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom textAlign="center" style={{ marginTop: '40px' }}>
        Scholarships
      </Typography>

      {/* Scholarship Dropdown */}
      <FormControl fullWidth style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <Select
          labelId="scholarship-select-label"
          value={scholarship}
          onChange={handleScholarshipChange}
          style={{ width: '300px', textAlign: 'center' }}
        >
          <MenuItem value={1}>Merit Scholarship</MenuItem>
          <MenuItem value={2}>Need-based Scholarship</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} justifyContent="center">
        {scholarships.map(scholarshipItem => (
          <Grid item xs={12} md={4} key={scholarshipItem.id}>
            <FeeCard
              fee={{
                ...scholarshipItem,
                details: (
                  <>
                    <div>{scholarshipItem.details}</div>
                    <div>Eligibility: {scholarshipItem.eligibility}</div>
                    <div>Application Deadline: {scholarshipItem.applicationDeadline}</div>
                  </>
                )
              }}
            />
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
