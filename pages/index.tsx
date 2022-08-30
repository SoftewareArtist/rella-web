import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import ResponsiveAppBar from '../src/AppHeader';
import background from '../src/assets/images/bg-0002-free-img.jpg';

const Home: NextPage = () => {
  return (
    <Container maxWidth={false} sx={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${background.src})`,
      backgroundSize: 'cover'
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <ResponsiveAppBar />
      </Box>

      <Copyright />
    </Container>
  );
};

export default Home;
