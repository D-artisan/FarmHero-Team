import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationEl, setNotificationEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const token = localStorage.getItem('token')
const history = useHistory()
  const isMenuOpen = Boolean(anchorEl);
  const isMenuuOpen = Boolean(notificationEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
	console.log(event.currentTarget);
  };
  const handleNotificationMenuOpen = (event) => {
    setNotificationEl(event.currentTarget);
	console.log(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
	setNotificationEl(null);
    handleMobileMenuClose();
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    setNotificationEl(null);
    handleMobileMenuClose();
    // axios({
    //   method: 'post',
    //   url: '/logout/',
    //   data: token
    // }).then(res => console.log(res))
    // .catch(err => console.log(err))
    history.push({
      pathname: '/'
    }) 
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
		<Link to='/seller/marketplace/profile' style={{color: '#000'}}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
	  </Link>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
	  {/* <Link to='/' style={{color: '#000'}}> */}
	  <MenuItem onClick={handleLogOut}>Log Out </MenuItem>
		{/* </Link> */}
    </Menu>
  );

  const notificationId = 'primary-notify-account-menu';
  const renderNotification = (
    <Menu
      anchorEl={notificationEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={notificationId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Kofi is a very busy guy</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
		
        <p>Profile</p>
	
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: 'none',border: 'none',boxShadow: 'none', }}>
      <AppBar position="static" style={{background: 'none',border: 'none', boxShadow: 'none'}} >
        <Toolbar > 
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            <IconButton
              size="large"
			  edge="end"
              aria-label="show 17 new notifications"
			  aria-controls={notificationId}
              aria-haspopup="true"
              style={{color: '#3daf73', marginRight: '10px', marginTop: '20px'}}
			  onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{width: '30px', height: '30px'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
			  style={{color: '#3daf73', marginRight: '60px',  marginTop: '20px'}}
            >
              <AccountCircle style={{width: '30px', height: '30px'}}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{color: '#000'}}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderNotification}

    </Box>
  );
}
