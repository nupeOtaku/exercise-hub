import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box } from '@mui/material';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
