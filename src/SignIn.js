import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, Button, Menu, MenuItem, AppBar } from '@material-ui/core';
import './SignIn.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { ThemeProvider } from '@material-ui/styles';
  import { createMuiTheme } from '@material-ui/core/styles';



const styles = theme => ({
    loginRoot: {
        paddingTop: '2%',
        flexGrow: 1,
    },
    headerPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        fontSize: 20,   
        fontWeight: 500,
        margin: 0,
        width: '100%',
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
        borderColor: 'white'
    },
    guestcode : {
        paddingRight : 200,
        textDecoration: 'none',
        color : 'white',
        border: '3px solid #8a2be2',
        borderRadius: "3px",
        backgroundColor: 'black',
        marginBottom: '3%'
    },
    guestLink: { 
        textDecoration: 'none',
        color : 'white',
    },
    fakeLogin: {
        color: 'white',
        textDecoration: 'none',
        border: '1px solid white',
        padding: '2px',
        borderRadius: '6px'
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
        const addWhite = createMuiTheme({
            palette: {
                primary: {
                // light: will be calculated from palette.primary.main,
                    main: '#ffffff',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
                },
              type: 'dark'
            },
        });
        const { classes } = this.props;
        return (
            <div>
                <AppBar/>
                <div className={classes.loginRoot}>
                    <Grid container className={classes.headerPaper} spacing={3} justify="center" alignItems='center' direction='column'>

                        <Grid item className={classes.guestcode}>
                            <Link to="/guestcode" className={classes.guestLink}>
                                <MenuItem>Enter Guest Code</MenuItem>
                            </Link>
                        </Grid>
                        <ThemeProvider theme={addWhite}>
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
                            
                            {/**TODO: Make Login actually work, for now log in as admin not matter what */}
                            {/* <Button onClick={() => { alert('login') }} className={classes.login} variant="outlined">Log In</Button> */}
                            <Link to="/homeViewing" className={classes.fakeLogin}>
                                <MenuItem>Log In</MenuItem>
                            </Link>
                        </ThemeProvider>
                        <Grid item>
                            <div>
                                <p3>
                                    Don't have an account?
                                </p3>
                                <Button className={classes.login}><u>Sign Up</u></Button>
                            </div>
                        </Grid>
                        
                    </Grid>  
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(Landing);