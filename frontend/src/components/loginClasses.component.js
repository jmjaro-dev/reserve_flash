//classes version of the login.component.js

import React from 'react';

//PropTypes
import PropTypes from 'prop-types';
//MaterialUI Dependencies
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box'

// import Avatar from '@material-ui/core/Avatar';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Link from '@material-ui/core/Link';

//Footer
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Reserve-Flash by DevLift Philippines
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const styles = {
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: 10,
    }
}

class LoginSample extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);


        this.state = {
            password: '',
            showPassword: false

        }

    }

    handleChange = prop => e => {
        this.setState({
            [prop]: e.target.value
        })
    }

    handleClickShowPassword() {
        this.setState(state => ({
            showPassword: !state.showPassword
        }))
    }
    handleMouseDownPassword(e) {
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const password = this.state.password;
        const showPassword = this.state.showPassword;
        const handleClickShowPassword = this.handleClickShowPassword
        return (
            <div className={classes.root}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline /> {/* krung krung sa css baseline hahaha*/}
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h3">
                            Welcome
                    </Typography>
                        <Typography component="h1" variant="h5">
                            Sign In
                    </Typography>

                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                id="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={this.handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                        <br></br>
                        <Box align="center">--OR--</Box>

                        <Grid container spacing={1}>

                            <Grid item xs={6}>
                                <a
                                    className="btn login-btn"
                                    style={{ backgroundColor: "blue", margin: 5, display: "block" }}
                                >
                                    <span style={{ marginTop: 1, float: "left", verticalAlign: "middle" }}>
                                        <i class="fa fa-facebook-square" aria-hidden="true" height="100"></i>
                                    </span>
                                    <span className="btn-txt-fb">
                                        Login using Facebok</span>
                                </a>
                            </Grid>

                            <Grid item xs={6}>
                                <a
                                    className="btn login-btn"
                                    style={{ backgroundColor: "white", margin: 5, display: "block" }}
                                >
                                    <span style={{ marginTop: 3, float: "left", verticalAlign: "middle" }}><svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg></span>
                                    <span className="btn-txt-google">
                                        Login using Google</span>
                                </a>


                            </Grid>
                        </Grid>
                        <br /><br />

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        )
    }


}


LoginSample.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginSample);