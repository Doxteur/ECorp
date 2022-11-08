
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
export default function BasicCard({post}) {
    return (
      <Card >
        <CardContent>
       
          <Typography variant="body2">
            {post.title}   
          </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.body}
            </Typography>
            
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <div className='m-auto'>
          <Button size="small" variant="contained" color="success">Modifier</Button>
          <Button size="small" variant="contained" color="error">Supprimer</Button>
          </div>
        </CardActions>
      </Card>
    );
  }
  