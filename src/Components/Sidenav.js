import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIco n';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccountBalanceWalletOutlined, AllInbox, Api, Dashboard, EmailOutlined, SupportAgentOutlined } from '@mui/icons-material';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Dashboard' placement="right">
                  <Dashboard />
                </Tooltip>
              </ListItemIcon>
              {/* <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/single-verify") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Single Verify' placement="right">
                  <EmailOutlined />
                </Tooltip>
              </ListItemIcon>
              {/* <ListItemText primary="Single Email" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/bulk-verify") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title = 'Bulk Verify' placement="right">
                <AllInbox />
                </Tooltip>
              </ListItemIcon>
              {/* <ListItemText primary="Bulk Verifier" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>

          {/* API ROUTE */}
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/api") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title = 'Api' placement="right">
                <Api />
                </Tooltip>
              </ListItemIcon>
              {/* <ListItemText primary="API " sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/team") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                
                <Tooltip title = 'Team' placement="right">
                <GroupAddIcon />
                </Tooltip>

              </ListItemIcon>
              {/* <ListItemText primary="Team" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>

          {/* Subscription Menu Item */}
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/subscription") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                
                <Tooltip title = "Subscription" placement="right">
                <AccountBalanceWalletOutlined />
                </Tooltip>

              </ListItemIcon>
              {/* <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>

          {/* Support Menu Item */}
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/support") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                
                <Tooltip title = "Support" placement="right">
                <SupportAgentOutlined />
                </Tooltip>

              </ListItemIcon>
              {/* <ListItemText primary="Support" sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>


        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>
    </Box>
  );
}
