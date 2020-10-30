import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


const styles = theme => ({
    options: {
      width: 250,
    },
    option: {
        textAlign: 'center',
        color: "white"
    },
    optionText: {
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(','),
        color: 'white',
        textDecoration: 'none'
    },
    paper: {
        background: "black"
    }
  });

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {open: false};
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Drawer classes={{ paper: classes.paper }} anchor="right" open={this.state.open} onClose={this.handleDrawerClose}>
                    <List className={classes.options}>
                        <ListItem className={classes.option} key="Home">
                            <ListItemText className={classes.option} 
                                primary={<Link className={classes.optionText} to="/homeViewing" onClick={this.handleDrawerClose}>Home</Link>} 
                            />
                        </ListItem>
                        <ListItem className={classes.option} key="Profile">
                            <ListItemText className={classes.option} 
                                primary={<Link className={classes.optionText} to="/profile" onClick={this.handleDrawerClose}>Profile</Link>} 
                            />
                        </ListItem>
                        <ListItem className={classes.option} key="Settings">
                            <ListItemText className={classes.option} 
                                primary={<Link className={classes.optionText} to="/settings" onClick={this.handleDrawerClose}>Settings</Link>} 
                            />
                        </ListItem>
                        <ListItem className={classes.option} key="Sign Out">
                            <ListItemText className={classes.option} 
                                primary={<Link className={classes.optionText} to="/" onClick={this.handleDrawerClose}>Sign Out</Link>} 
                            />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(SideBar);