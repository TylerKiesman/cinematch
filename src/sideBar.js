import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


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
        ].join(',')
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
                        {['Home', 'Profile', 'Settings', 'Sign Out'].map((text) => (
                            <ListItem button className={classes.option} key={text}>
                                <ListItemText className={classes.option} disableTypography 
                                    primary={<Typography className={classes.optionText}>{text}</Typography>} 
                                />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: false})(SideBar);