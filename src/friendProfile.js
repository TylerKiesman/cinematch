import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as data from './dataInterface';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper, CardMedia } from '@material-ui/core';
import dp from './profile-picture.PNG';


const styles = theme => ({
    movieRoot: {
        flexGrow: 1,
    },
    update: {
        marginTop: 10,
        marginLeft: 1,
        height: 50,
        borderColor: 'white',
        border: '1px solid',
    },
    headerPaper: {
        backgroundColor: "#8a2be2",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        fontSize: 20,
    },
    headers: {
        margin: 0,
        width: '100%',
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    frame: {
        paddingTop: '1%',
        position: "relative",
        overflow: "hidden",
    },
    lists: {
        backgroundColor: "black",
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        paddingLeft: '5px',
        paddingRight: '5px',
        fontSize: 20,
        height: 200,
        overflowY: 'scroll',
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    updates: {
        backgroundColor: "black",
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        paddingLeft: '5px',
        paddingRight: '5px',
        fontSize: 20,
        height: 200,
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    }
});

const darkTheme = createMuiTheme({
    palette: {
        primary: {
        // light: will be calculated from palette.primary.main,
            main: '#8a2be2',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        },
      type: 'dark'
    },
});



class FriendProfile extends React.Component {

    constructor(props) {
        super(props);
        console.log("props" + this.props.user);
        this.state = {user: this.props.user};
        console.log("state" + this.state.user);

    }

    handleClick = friend => {
        const friendMail = data.getUserInfoByName(friend).email;
        this.setState({user: friendMail});
    }

    render(){
        const { user } = this.state;
        const { classes } = this.props;
        const userInfo = data.getUserInfo(user);
        return (
            <div className={classes.movieRoot}>
                <AppBar/>
                <h3 style={{paddingLeft: '1%', color: 'white'}}>Guest Code: {userInfo.name}</h3>
                <Grid container className={classes.headers} spacing={3} justify="center">
                    <Grid item key="title" xs={5} justify="center" style={{paddingTop: '10%', paddingLeft: '10%',
                    alignItems: "center", justify: "center"}}>
                    <CardMedia style={{height: 10, width: 250, paddingTop: '30%'}}
                    image={dp} title="lorem ipsum"/>
                        <p style={{color: "white", paddingLeft: 100}}><b>{userInfo.name}</b></p>
                    </Grid>
                    <Grid item key="summary" xs={5}>
                        <Paper className={classes.headerPaper}><b>Movie Lists</b></Paper>
                        <div className={classes.frame}>
                            <Paper variant="outlined" className={classes.lists}>
                                {userInfo.lists.map((list) => (
                                <Grid key={list.name} item >
                                    <p><b>{list.name}</b></p>
                                </Grid>
                            ))}
                            </Paper>
                        </div>
                        <div className={classes.frame}>
                            <Paper variant="outlined" className={classes.updates} display="flex">
                            <Grid item className={classes.update} >
                                <p style={{paddingLeft: 5}}>{userInfo.name} liked Wolf of Wall Street.</p>
                             </Grid>
                             <Grid item className={classes.update} >
                                <p style={{paddingLeft: 5}}>{userInfo.name} created a new list called "History".</p>
                             </Grid>
                             <Grid item className={classes.update} >
                                <p style={{paddingLeft: 5}}>{userInfo.name} liked Parasite.</p>
                             </Grid>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </div>);
    }
}

export default withStyles(styles, {withTheme: false})(FriendProfile);