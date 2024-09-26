import React from 'react';
import { Grid, Box, Avatar, Typography, Divider } from '@mui/material';
import ProfileCard from './ProfileCard';

const Second = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 4 }}>
      
      {/* Profile Photo and Name on the Left */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
        <Avatar 
          alt="Profile Picture" 
          src="path_to_your_image" // Path to your round profile image
          sx={{
            width: 180, // Reduced photo size
            height: 180,
            border: '4px solid #1976d2', // Blue border around the profile picture
            borderRadius: '50%', // Ensuring the picture is round
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)' // More prominent shadow
          }} 
        />
        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
          John Doe {/* Replace with the actual name */}
        </Typography>
      </Box>

      {/* Divider between photo and cards */}
      <Divider orientation="vertical" flexItem sx={{ marginLeft: 3, marginRight: 3, height: 'auto', borderWidth: '1px', borderColor: '#b0bec5' }} />

      {/* Cards Section on the Right */}
      <Grid container spacing={2} sx={{ maxWidth: 600 }}> {/* Adjusted for 3 cards per row */}
        {/* First Row of 3 Cards */}
        <Grid item xs={4}>
          <ProfileCard heading="Age" info="51 years (26 Mar 1973)" />
        </Grid>
        <Grid item xs={4}>
          <ProfileCard heading="Net worth" info="13,510 crores USD (2024)" />
        </Grid>
        <Grid item xs={4}>
          <ProfileCard heading="Some Other Info" info="Details here" />
        </Grid>

        {/* Second Row of 3 Cards */}
        <Grid item xs={4}>
          <ProfileCard heading="Another Info" info="More details" />
        </Grid>
        <Grid item xs={4}>
          <ProfileCard heading="Additional Info" info="Some additional info" />
        </Grid>
        <Grid item xs={4}>
          <ProfileCard heading="Final Info" info="Final piece of information" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Second;
