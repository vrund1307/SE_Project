// Second.js
import React from 'react';
import { Grid, Box, Avatar, Typography, Divider } from '@mui/material';
import ProfileCard from './ProfileCard';

const Second = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f0f0' }}> {/* Overall background */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Section: Profile Photo */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: 2,
              borderRadius: 3,
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
              backgroundColor: '#e3f2fd', // Profile section color
              border: '2px solid #1976d2',
              marginBottom: 4 // Increased space below the profile photo
            }}
          >
            <Avatar
              alt="Profile Picture"
              src="path_to_your_image" // Replace with actual image path
              sx={{
                width: { xs: 100, sm: 120, md: 150 },
                height: { xs: 100, sm: 120, md: 150 },
                border: '4px solid #1976d2',
                borderRadius: '50%',
                marginBottom: 5, // Space below the profile picture
              }}
            />
            <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold' }}>
              John Doe
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', marginTop: 0.5 }}>
              Student
            </Typography>
          </Box>
        </Grid>

        {/* Right Section: Information Cards */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}> {/* Reduced spacing between information sections */}
            {/* Personal Information Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ marginBottom: 1, textAlign: 'center' }}>
                Personal Information
              </Typography>
              <Divider sx={{ marginBottom: 1 }} /> {/* Divider for the section */}
              <Grid container spacing={2} justifyContent="center">
                {[
                  { heading: "Age", info: "20 years" },
                  { heading: "Net Worth", info: "N/A" },
                  { heading: "Position", info: "Student" },
                  { heading: "Location", info: "California, USA" }
                ].map((item, index) => (
                  <Grid item key={index}>
                    <ProfileCard heading={item.heading} info={item.info} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Educational Information Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ marginBottom: 1, textAlign: 'center' }}>
                Educational Information
              </Typography>
              <Divider sx={{ marginBottom: 1 }} /> {/* Divider for the section */}
              <Grid container spacing={2} justifyContent="center">
                {[
                  { heading: "Major", info: "Computer Science" },
                  { heading: "GPA", info: "3.9" },
                  { heading: "Years Active", info: "2 Years" },
                  { heading: "Last Promotion", info: "N/A" }
                ].map((item, index) => (
                  <Grid item key={index}>
                    <ProfileCard heading={item.heading} info={item.info} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Second;
