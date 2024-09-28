import React from 'react';
import { Grid, Box, Avatar, Typography, Divider, Card } from '@mui/material';
import ProfileCard from './ProfileCard';

const Second = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', padding: 4 }}>
      {/* Profile Card with Avatar */}
      <Card 
        variant="outlined" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          marginRight: 5,  // Increased margin to push cards further right
          borderRadius: 3,
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#f5f5f5',
          border: '1px solid #1976d2',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)',
          }
        }}
      >
        <Avatar 
          alt="Profile Picture" 
          src="path_to_your_image" // Replace with actual image path
          sx={{
            width: 180, 
            height: 180,
            border: '4px solid #1976d2', 
            borderRadius: '50%', 
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)' 
          }} 
        />
        <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          John Doe
        </Typography>
        <Typography variant="body2" sx={{ color: '#555', marginTop: 0.5 }}>
          Student
        </Typography>
      </Card>

      {/* Divider with margin adjustments */}
      <Divider 
        orientation="vertical" 
        flexItem 
        sx={{ marginLeft: 3, marginRight: 3, height: 'auto', borderWidth: '1px', borderColor: '#b0bec5' }} 
      />

      {/* Profile Information Cards */}
      <Grid container spacing={1} sx={{ maxWidth: 900, marginLeft: 4 }}>  {/* Increased marginLeft to move cards further right */}
        <Grid item xs={3}>
          <ProfileCard heading="Age" info="51 years" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Net Worth" info="13,510 crores USD" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Position" info="CEO" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Location" info="California, USA" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Years Active" info="25 Years" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Last Promotion" info="2022" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="Major" info="Computer Science" />
        </Grid>
        <Grid item xs={3}>
          <ProfileCard heading="GPA" info="3.9" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Second;
