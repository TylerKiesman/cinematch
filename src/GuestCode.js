import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as data from './dataInterface';
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FormControl, FormHelperText, ListItem, List, SvgIcon, IconButton, Grid, Paper, formControl, Input, Button ,InputLabel} from '@material-ui/core';


const styles = theme => ({
    description : {
        color : 'white',
        backgroundColor : '#c393f0',
        textAlign: 'center',
        width : 500,
        left : 100
    },
    headerPaper : {
        backgroundColor: "#c393f0",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        fontSize: 20,
    }
});


class GuestCode extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.headerPaper} variant="outlined"><b>Cinematch</b></Paper>
                <Grid container justify='center' spacing={3}>
                    <div className={classes.description}>
                        <Grid item >
                            <Paper className={classes.description} variant="outlined"><b>Guest Mode allows you to Cinematch with your friends in real time!</b></Paper>
                        </Grid>
                        <Grid item>                        
                            <p1>Enter Guest Code:</p1>
                            <FormControl>
                                <Input id="pw" aria-describedby="pwtext" />
                                <FormHelperText>Ask a friend with a Cinematch account to share their Guest Code!</FormHelperText>
                            </FormControl> 
                            <Button>Connect</Button> 
                        </Grid>
                    </div> 
                </Grid>      
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(GuestCode);