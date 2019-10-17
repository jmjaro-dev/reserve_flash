import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//Header Name
import Typography from '@material-ui/core/Typography';
//Menu button and Icon
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//Avatar Icon
import AccountCircle from '@material-ui/icons/AccountCircle';
//Avatar onClick Menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




//use makeStyle if you want to customize your 
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function AppNavbar() {
    const classes = useStyles();

    //Event Listeners use in React
    const [anchorEl, setAnchorEl] = React.useState(null);

    //Boolean for triggering the event handler
    const isMenuOpen = Boolean(anchorEl);

    //Menu onclick event listener
    //Eventlistern for opening the event after clicking the target
    const handleProfileMenuOpen = e => {
        setAnchorEl(e.currentTarget);
    }
    //Menu Item onclick listerner
    //Eventlistener for closing the event after clicking the target
    const handelMenuClose = e => {
        setAnchorEl(null);
    }

    //MenuItem render
    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'rigth' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handelMenuClose}
        >
            {/* MenuItems */}
            <MenuItem onClick={handelMenuClose}>Sign In</MenuItem>
            <MenuItem onClick={handelMenuClose}>Sign Up</MenuItem>
        </Menu>
    );

    return (
        <div>
            <AppBar>
                <Toolbar className="teal">
                    {/*Menu Icon and Button */}
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Reserve/Flash
                    </Typography>

                    <div>
                        {/* Profile Icon Button */}
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {/* Rendering the MenuItem List */}
            {renderMenu}
        </div>
    )
}