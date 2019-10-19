import React from 'react';
//Material UI Components
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
    //global style
    root: {
        flexGrow: 1,
        marginTop: 70
    },
    // Card styles
    card: {
        maxWidth: 345,
        marginTop: 20
    }
}))


export default function BodyPage() {
    const classes = useStyles();

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
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src="/images/plane.jpg"
                                    title="Airline Services"
                                    alt="Airline Services"
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

    );
}
