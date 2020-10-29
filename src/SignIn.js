import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, Button, Menu, MenuItem } from '@material-ui/core';
import './SignIn.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const styles = theme => ({
    movieRoot: {
        flexGrow: 1,
    },
    headerPaper: {
        backgroundColor: "#c393f0",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        borderColor: '#c393f0',
        border: '1px solid',
        fontSize: 20,   
        fontWeight: 500
    },
    headers: {
        paddingTop: '1.5%',
        margin: 0,
        width: '100%',
        color : 'white'
    },
    frame: {
        paddingTop: '1%',
        position: "relative",
        overflow: "hidden",
    },
    login: {
        color: 'white',
        paddingLeft : 200,
        paddingTop : 100
    },
    guestcode : {
        paddingRight : 200,
    }
});

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {curIdex: 0};
        this.signIn = this.signIn.bind(this);
        this.getGuestCode = this.getGuestCode.bind(this);
    }

    signIn(){
        //Add to list
        //this.moveOntoNextMovie();
    }

    getGuestCode(){
        //this.moveOntoNextMovie();
    }

    render(){
        console.log("Landing Page");
        const { classes } = this.props;
        return (
            <div color='#c393f0' width='100%' height='100%'>
                <div className={classes.movieRoot}>
                    <Grid container className={classes.headerPaper} spacing={3} justify="center" alignItems='center' direction='column'>
                        <Grid item key="title" xs={5}>
                            <Paper className={classes.headerPaper} variant="outlined"><b>Cinematch</b></Paper>
                        </Grid>

                        <Grid item className={classes.guestcode}>
                            <Link to="/guestcode" style={{ textDecoration: 'none', color : 'white' }}>
                                <MenuItem>Enter Guest Code</MenuItem>
                            </Link>
                        </Grid>

                        <Grid item>
                            <FormControl alignItems='center'>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="email" aria-describedby="emailtxt" />
                            </FormControl>  
                        </Grid>

                        <Grid item>
                            <FormControl alignItems='center'>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input id="pw" aria-describedby="pwtext" />
                            </FormControl> 
                        </Grid>
                        
                        <Button onClick={() => { alert('login') }} className="login" variant="outlined">Log In</Button>

                        <Grid item>
                            <div>
                                <p3>
                                    Don't have an account?
                                </p3>
                                <Button>Sign Up</Button>
                            </div>
                        </Grid>
                        
                    </Grid>  
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(Landing);