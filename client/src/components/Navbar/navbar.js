import React, { useState, useEffect } from "react";
import { AppBar, Typography, Avatar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from './style';
import memories from "../../images/memories.png";
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate('/auth');
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;