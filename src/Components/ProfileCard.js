import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
const ProfileCard = ({ heading, info }) => {
  return (
    <Card 
      variant="outlined"
      sx={{
        width: 180, 
        height: 100, 
        margin: 1,
        borderRadius: 3, 
        background: '#fff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', 
          background: 'linear-gradient(135deg, #1976d2, #42a5f5)', 
          boxShadow: '0px 6px 12px rgba(0,0,0,0.3)',
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
