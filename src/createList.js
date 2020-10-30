import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import * as data from './dataInterface';


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

class NewListDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false, name: ''};
        this.handleNewList = this.handleNewList.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleOpen(){
        this.setState({open: true});
    }

    handleNewList(){
        // CHANGE TO LOGGED IN USER
        data.generateNewList('admin@mail.com', this.state.name);
        this.props.refresh();
        this.setState({open: false});
    }

    handleClose(){
        this.setState({open: false});
    }

    handleNameChange(e){
        this.setState({open: this.state.open, name: e.target.value})
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
                    <DialogTitle id="alert-dialog-title">{"Create New List"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Enter the name of the new list that you want to add this movie to.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="List Name"
                            fullWidth
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleNewList} color="primary" type="submit">
                        Create
                    </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>)
    }
}

export default NewListDialog;