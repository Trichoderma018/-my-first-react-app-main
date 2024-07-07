import React from 'react';
import { Drawer, Divider, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, IconButton, Box } from '@mui/material';
import { Home as HomeIcon, AttachMoney as AttachMoneyIcon, Calculate as CalculateIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const drawerWidth = 240;
const minimizedDrawerWidth = 60;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = ({ mobileOpen, handleDrawerToggle, open, handleDrawerMinimize }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: open ? drawerWidth : minimizedDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent(open, handleDrawerMinimize)}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: open ? drawerWidth : minimizedDrawerWidth, 
            transition: 'width 0.3s',
          },
        }}
      >
        {drawerContent(open, handleDrawerMinimize)}
      </Drawer>
    </Box>
  );
};

const drawerContent = (open, handleDrawerMinimize) => (
  <div>
    <DrawerHeader>
      <IconButton onClick={handleDrawerMinimize}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      <ListItemButton component={Link} to="/">
        <ListItemIcon><HomeIcon /></ListItemIcon>
        {open && <ListItemText primary="Home" />}
      </ListItemButton>
      <ListItemButton component={Link} to="/converter">
        <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
        {open && <ListItemText primary="Converter" />}
      </ListItemButton>
      <ListItemButton component={Link} to="/calculator">
        <ListItemIcon><CalculateIcon /></ListItemIcon>
        {open && <ListItemText primary="Calculator" />}
      </ListItemButton>
    </List>
  </div>
);

export default Sidebar;
