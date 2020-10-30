import React from 'react';
import * as data from './dataInterface';
import NewListDialog from './createList';
import {FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
  import { createMuiTheme } from '@material-ui/core/styles';



const styles = theme => ({
    formControl: {
        width: "100%",
        color: 'white'
    },
    listSelect: {
        float: "right",
        '&:before': {
            borderColor: "white",
        },
        '&:after': {
            borderColor: "white",
        },
        color: 'white'
    }
});

class AccountLists extends React.Component{
    constructor(props){
        super(props);
        this.state = {curList: data.getUserLists('admin@mail.com')[0]}
        this.createNewList = React.createRef();
        this.createList = this.createList.bind(this);
        this.refresh = this.refresh.bind(this);
        this.changeList = this.changeList.bind(this);
    }

    createList(){
        this.createNewList.current.handleOpen();

    }

    refresh(){
        this.setState({curList: this.state.curList});
    }

    changeList(event){
        var i;
        var lists = data.getUserLists('admin@mail.com')
        for(i = 0; i < lists.length; i++){
            if(lists[i].name == event.target.value){
                this.setState({curList: lists[i]});
                break;
            }
        }
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
        return(
            <body style={{backgroundColor: "#262626"}}>
                <NewListDialog ref={this.createNewList} refresh={this.refresh}/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <h1 style={{color: "white"}} class="text-center"> Your Lists</h1>
                <div style={{width: "100%"}}>
                <ThemeProvider class="right" theme={addWhite}>
                    <Button variant="outlined" onClick={this.createList}>Create New List</Button>
                    <div style={{position:"relative", float:"right", width: '12%'}}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select labelId="list-select" className={classes.listSelect} value={this.state.curList.name} onChange={this.changeList}>
                                {data.getUserLists('admin@mail.com').map((list) => (
                                    <MenuItem value={list.name}>{list.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </div>
                    </ThemeProvider>
                    </div>
                <br/>
                <br/>
                <div>
                    <div style={{textAlign: "center"}}>
                        {this.state.curList.movies.map((title) => (
                            <h2 style={{color: "white"}}>{title}<br/><br/></h2>
                        ))}
                    </div>
                </div>
            </body>
        )
    }
}

export default withStyles(styles, {withTheme: false})(AccountLists);;