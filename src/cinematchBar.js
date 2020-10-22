import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './sideBar';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    AppBar: {
      backgroundColor: "#8a2be2",
    },
    title: {
        flexGrow: 1,
        align: "center",
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    burger: {
        marginLeft: 'auto',
    },
});

class CinematchBar extends React.Component{
    constructor(props){
        super(props);
        this.sideBarRef = React.createRef();
        this.state = {signedIn: props.signInStatus};
        this.openSideBar = this.openSideBar.bind(this);
    }

    signIn(){
        this.setState({signedIn: true});
    }

    signOut(){
        this.setState({signedIn: false});
    }

    openSideBar(){
        this.sideBarRef.current.handleDrawerOpen();
    }

    render(){
        const { classes } = this.props;
        if(this.state.signedIn){
            return (
                <div>
                    <SideBar ref={this.sideBarRef} />
                    <div>
                        <AppBar position="static">
                            <Toolbar className={classes.AppBar}>
                            <Typography className={classes.title} variant="h3">
                                Cinematch
                            </Typography>
                            <IconButton className={classes.burger} edge="start" aria-label="menu" onClick={this.openSideBar}>
                                <MenuIcon />
                            </IconButton>
                            </Toolbar>
                        </AppBar>
                    </div>
                </div>
            )
        } else{
            return (
                <div>
                    <div>
                        <AppBar>
                            <Toolbar className={classes.AppBar}>
                            <Typography className={classes.title} variant="h5">
                                Cinematch
                            </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                </div>
            )
        }
    }
}

export default withStyles(styles, {withTheme: false})(CinematchBar);