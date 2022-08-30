import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center" sx={{
      position: 'fixed',
      bottom: '20px',
      justifyContent: 'center',
      width: '100%'
    }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://rella.xyz/">
        Rella
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
