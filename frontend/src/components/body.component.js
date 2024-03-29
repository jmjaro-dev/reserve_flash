import React from 'react';
//Proptypes
import PropTypes from 'prop-types';
//Material UI Components
import { withStyles } from '@material-ui/core/styles';
//Container & Grid
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//TypoGraphies
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
//Card
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

//High Order
const styles = {
    root: {
        flexGrow: 1,
        marginTop: 70
    },
    card: {
        maxWidth: 345,
        marginTop: 20
    },
};




function BodyPage(props) {
    const { classes } = props;
    return (
        //Header Title
        <div className={classes.root}>
            <Typography className={classes.root} variant="h5" >
                <Box textAlign="center" className="teal-text">Reserve your tickets in a <b>flash</b></Box>
            </Typography>

            {/* //Card Body */}
            <Container align="center">

                <Grid container spacing={3}>
                    {/* Grid 1 */}
                    <Grid item xs={12} sm={4}>
                        {/* Card 1 */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                {/* Picture */}
                                <CardMedia
                                    component="img"
                                    height="140"
                                    alt="Airline Services"
                                    src="img/gettyimages-155150766-612x612.jpg"
                                    title="Airline Services"
                                />
                                {/* Fix the img here */}
                                <CardContent align="center">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <span className="teal-text">Airline</span> Services
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Grid 2 */}
                    <Grid item xs={12} sm={4}>
                        {/* Card 2 */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                {/* Picture */}
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image=""
                                    title="Bus Services"
                                />
                                {/* Fix the img here */}
                                <CardContent align="center">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <span className="teal-text">Bus</span> Services
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Grid 3 */}
                    <Grid item xs={12} sm={4}>
                        {/* Card 3 */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                {/* Picture */}
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image=""
                                    title="Cinema Services"
                                />
                                <CardContent align="center">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <span className="teal-text">Cinema</span> Services
                                </Typography>
                                    {/* Fix the img here */}
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                </Grid>

            </Container>
        </div>

    )
};

//HighOrder Component PropTypes
BodyPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyPage);
