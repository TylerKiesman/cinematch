import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';


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
    },
    frame: {
        paddingTop: '1%',
        position: "relative",
        overflow: "hidden",
    }
});

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {curIdex: 0};
        this.likeMovie = this.likeMovie.bind(this);
        this.dislikeMovie = this.dislikeMovie.bind(this);
        this.moveOntoNextMovie = this.moveOntoNextMovie.bind(this);
    }

    likeMovie(){
        //Add to list
        this.moveOntoNextMovie();
    }

    dislikeMovie(){
        this.moveOntoNextMovie();
    }

    moveOntoNextMovie(){
        if(this.state.curIdex == this.movies.length - 1){
            this.setState({curIdex: 0})
        }
        else{
            this.setState({curIdex: this.state.curIdex + 1})
        }
    }

    render(){
        console.log("Landing Page");
        const { classes } = this.props;
        return (
        <div backgroundColor='#c393f0' width='100%' height='100%'>
            <div className={classes.movieRoot}>
                <Grid container className={classes.headers} spacing={3} justify="center" alignItems='center'>
                    <Grid item key="title" xs={5}>
                        <Paper className={classes.headerPaper} variant="outlined"><b>Cinematch</b></Paper>
                    </Grid>
                    <br/>
                    <br/>
                    <FormControl alignItems='center'>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="email" aria-describedby="emailtxt" />
                        <FormHelperText id="emailtxt">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl alignItems='center'>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="pw" aria-describedby="pwtext" />
                        <FormHelperText id="pwtext">Enter a secure and unique password.</FormHelperText>
                    </FormControl>
                </Grid>
            </div>
        </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(Landing);