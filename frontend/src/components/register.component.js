import React from 'react';
//PropTypes
import PropTypes from 'prop-types';
//MaterialUI Dependencies
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

//DatePicker
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

//Component styling
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
    avatar: {
        margin: 10,
        backgroundColor: 'teal',
    },
    form: {
        width: '100%',
        marginTop: 20,
    },
    submit: {
        backgroundColor: 'teal',
        textColor: 'white',
    },
};


function Register(props) {
    const { classes } = props;

    //Date variable
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date)
    }

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline /> {/* krung krung sa css baseline hahaha*/}
                {/* Avatar */}
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountBoxRoundedIcon />
                    </Avatar>
                    {/* Header */}
                    <Typography component="h1" variant="h4">
                        Sign Up in an Instant
                    </Typography>
                    <br />
                    {/* Form */}

                    <form classname={classes.form} noValidate>
                        {/* Personal Information */}
                        <Typography>Personal Info Registration</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    margin="normal"
                                    variant="outlined"
                                    label="Full Name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    type="number"
                                    id="contactNo"
                                    name="contactNo"
                                    margin="normal"
                                    variant="outlined"
                                    label="Contact Number"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        {/* Calendar here Continue tomorrow */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                fullWidth
                                id="date"
                                label="Date of Birth"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        {/* User Account Register */}
                        <Typography>Account Registration</Typography>
                        {/* Email Input Field */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="outlined-email-input"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        {/* Password TextField */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"

                        />

                        <FormControlLabel
                            control={<Checkbox value="" color="teal" />}
                            label="I have read the Terms of Agreement"
                        />
                        {/* Change the terms of agreement into link */}

                        {/* Submit BTN */}
                        <Button
                            type="Submit"
                            fullWidth
                            variant="contained"
                            color="teal"
                            className={classes.submit}
                        >
                            Register
                    </Button>

                    </form>

                </div>
            </Container>
        </div>
    )
};

Register.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Register);



