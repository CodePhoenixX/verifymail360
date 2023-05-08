import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = [<Link to="/profile" style={{ textDecoration: 'none', color: '#343a40', padding: "15px" }}>Profile</Link>, <Link to="/logout" style={{ textDecoration: 'none', color: '#343a40', padding: "15px" }}>Logout</Link>];


const AppBar = styled(MuiAppBar, {
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='Appbar-nav' style={{ position: "fixed", background: '#fff', color: '#393e46', fontSize: "30", boxShadow: 'none', borderBottom: '1px solid #cecdcd', zIndex: 99999, }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              color: '#343a40',
              textDecoration: 'none',
            }}
          >
            {/* Working here to load site logo-------------------- */}
            <Link to='/single-verify' className='logo'>  <img src='img/logo.svg' alt='mySvgImage' />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 30, display: { xs: 'flex', md: 'none' } }}>
            <Link to='/single-verify' className='logo'>  <img src='img/logo.svg' alt='mySvgImage' /></Link>
          </Box>




          {/* Support Icon */}

          <Box style={{ flexGrow: 30 }}>

          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >

            <p style={{ fontSize: '20px', marginRight: '30px', marginBottom: 0 }}><b>Plan:</b> Monthly</p>

            <Link to="/support" style={{fontSize: '25px', color: '#343a40', lineHeight: 0, marginRight: '30px', marginBottom: 0, marginTop: '4px' }}>

              

              <div className="dropdown">
                <a  href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#343a40'}}>
                <i className='bx bx-help-circle' ></i>
                </a>

                <ul className="dropdown-menu dropdown-custom" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">List-Item-1</a></li>
                  <li><a className="dropdown-item" href="#">List-Item-2</a></li>
                  <li><a className="dropdown-item" href="#">List-Item-3</a></li>
                  <li><a className="dropdown-item" href="#">List-Item-4</a></li>
                  <li><a className="dropdown-item" href="#">List-Item-5</a></li>
                </ul>
              </div>

            </Link>
          </Box>


          {/* User Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Amit" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;