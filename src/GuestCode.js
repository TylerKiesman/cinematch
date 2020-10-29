import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as data from './dataInterface';
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { FormControl, FormHelperText, ListItem, List, SvgIcon, IconButton, Grid, Paper, formControl, Input, Button ,InputLabel} from '@material-ui/core';


const styles = theme => ({
    description : {
        color : 'white',
        textAlign: 'center',
        width : 500,
        left : 100,
        textAlign: 'center'
    },
    headerPaper : {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        fontSize: 20,
    },
    grid: {
        paddingTop: '18%',
        margin: 0,
        width: '100%',
    },
    connectButton: {
        color: 'white',
        textDecoration: 'none',
        border: '1px solid white',
        padding: '1%',
        borderRadius: '6px'
    }
});


class GuestCode extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        const { classes } = this.props;
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
        return (
            <div>
                <AppBar/>
                <AppBar/>
                <Grid container className={classes.grid} justify='center' spacing={1}>
                    <div className={classes.description}>
                    <ThemeProvider theme={addWhite}>
                        <Grid item>
                            <div className={classes.description}><b>Guest Mode allows you to Cinematch with your friends in real time!</b></div>                    
                            <p1>Enter Guest Code: </p1>
                            <Input id="pw" aria-describedby="pwtext" />
                            <p>Ask a friend with a Cinematch account to share their Guest Code!</p>
                            <Link className={classes.connectButton} to="/homeViewing">Connect</Link>
                        </Grid>
                        </ThemeProvider>
                    </div> 
                </Grid>      
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(GuestCode);