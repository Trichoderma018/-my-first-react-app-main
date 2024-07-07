import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar, AppBar, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Converter from './components/Converter';
import Calculator from './components/Calculator';
import CustomThemeProvider from './components/CustomThemeProvider';
import './App.css';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerMinimize = () => {
    setOpen(!open);
  };

  return (
    <CustomThemeProvider>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Cool React App
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle} 
          open={open} 
          handleDrawerMinimize={handleDrawerMinimize} 
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${open ? 240 : 60}px)` },
            marginTop: '64px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 64px)',
            transition: 'width 0.3s',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </Box>
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
