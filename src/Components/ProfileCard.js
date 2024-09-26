import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProfileCard = ({ heading, info }) => {
  return (
    <Card 
      variant="outlined"
      sx={{
        width: 180, // Fixed width for uniformity
        height: 100, // Fixed height for uniformity
        margin: 1,
        borderRadius: 3, // Applies rounded corners
        background: 'linear-gradient(135deg, #ffeb3b, #f57f17)', // Yellow to dark orange gradient
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition on hover
        '&:hover': {
          transform: 'scale(1.05)', // Slightly enlarge the card on hover
          boxShadow: '0px 6px 12px rgba(0,0,0,0.3)', // Increase shadow on hover
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontSize: 14, fontWeight: 'bold', color: '#212121' }}>
          {heading}
        </Typography>
        <Typography variant="body2" sx={{ color: '#212121' }}>
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
