import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

class AlreadySeenDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.props.moveOn();
        this.setState({open: false});
    }

    render(){
        return (<div>
            <ThemeProvider theme={darkTheme}>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Do you like this movie?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This choice won't add to a list but will affect future recommended movies.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Dislike
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Like
                    </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>)
    }
}

export default AlreadySeenDialog;