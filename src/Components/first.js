import React from 'react';
import { Avatar, Grid, Paper, Typography, Button, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
const first = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left section - Avatar */}
        <Grid item xs={12} md={3} display="flex" justifyContent="center">
          <Avatar
            alt="Profile Picture"
            src="/static/images/avatar/1.jpg"  // Add your image source here
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        {/* Right section - Information card */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              I am Bobly Doe, web developer from London, United Kingdom.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I have rich experience in website design, building, and customization. Also, I am good at WordPress.
            </Typography>
            <Button variant="contained" color="error" sx={{ mt: 2, mb: 3 }}>
              Download CV
            </Button>
            {/* Skill Bars */}
            <Box>
              <Typography variant="body1" gutterBottom>
                Development
              </Typography>
              <LinearProgress variant="determinate" value={90} sx={{ mb: 2 }} color="warning" />
              <Typography variant="body1" gutterBottom>
                UI/UX Design
              </Typography>
              <LinearProgress variant="determinate" value={80} sx={{ mb: 2 }} color="error" />
              <Typography variant="body1" gutterBottom>
                Photography
              </Typography>
              <LinearProgress variant="determinate" value={60} color="primary" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* Bottom section - Statistics */}
      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
        <Grid item xs={3}>
          <Typography variant="h6" align="center">198</Typography>
          <Typography variant="body2" align="center">Projects Completed</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" align="center">5670</Typography>
          <Typography variant="body2" align="center">Cups of Coffee</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" align="center">427</Typography>
          <Typography variant="body2" align="center">Satisfied Clients</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" align="center">35</Typography>
          <Typography variant="body2" align="center">Nominees Winner</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default first;