import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as data from './dataInterface';
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, Typography, Select, InputLabel, MenuItem, FormControl,
ListItem, List, SvgIcon, IconButton, Grid, Paper } from '@material-ui/core';
import AlreadySeenDialog from './alreadySeenMovieDialog';
import NewListForMovieDialog from './createNewListForMovieDialog';

const styles = theme => ({
    movieRoot: {
        flexGrow: 1,
    },
    headerPaper: {
        backgroundColor: "#8a2be2",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        fontSize: 20,
    },
    headers: {
        margin: 0,
        width: '100%',
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    frame: {
        paddingTop: '1%',
        position: "relative",
        overflow: "hidden",
    },
    summary: {
        backgroundColor: "black",
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        paddingLeft: '5px',
        paddingRight: '5px',
        fontSize: 20,
        height: 200,
        overflowY: 'scroll',
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    actors: {
        paddingTop: '1.5%',
        margin: 0,
        width: '100%',
    },
    actor: {
        color: "white"
    },
    actorPic: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '50%',
        width: '50%',
    },
    likeDislike: {
        margin: 0,
        width: '100%',
    },
    largeIcon: {
        fontSize: '4em',
        color: 'red',
    },
    largeButton: {
        padding: 1
    },
    addToListSection: {
        paddingTop: '7%'
    },
    whereWatch: {
        margin: "auto",
        display: "block",
        color: 'white',
        width: "100%",
        textAlign: "center"
    },
    watchOptions: {
        backgroundColor: "black",
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        fontSize: 20,
        height: 150,
        overflowY: 'scroll',
        fontFamily: [
            'Trebuchet MS',
            'sans-serif',
        ].join(',')
    },
    listSelect: {
        width: "100%"
    },
    formControl: {
        paddingTop: '1%',
        width: "100%",
        color: 'white'
    },
    listName: {
        color: 'white'
    },
    listSelect: {
        '&:before': {
            borderColor: "white",
        },
        '&:after': {
            borderColor: "white",
        },
        color: 'white'
    }
});

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

class HomeViewing extends React.Component{
    constructor(props){
        super(props);
        this.movies = data.getMovies();
        this.state = {curIdex: 0, displayFilm: true};
        this.alreadySeenRef = React.createRef();
        this.createNewList = React.createRef();
        this.likeMovie = this.likeMovie.bind(this);
        this.dislikeMovie = this.dislikeMovie.bind(this);
        this.moveOntoNextMovie = this.moveOntoNextMovie.bind(this);
        this.alreadySeen = this.alreadySeen.bind(this);
        this.addToList = this.addToList.bind(this);
        this.createList = this.createList.bind(this);
    }

    addToList(event){
        // CHANGE TO LOGGED IN USER
        data.addMovieToList('admin@mail.com', event.target.value, data.getMovieInfo(this.movies[this.state.curIdex]).title);
        this.moveOntoNextMovie();
    }

    likeMovie(){
        this.setState({curIdex: this.state.curIdex, displayFilm: false})
    }

    dislikeMovie(){
        this.moveOntoNextMovie();
    }

    alreadySeen(){
        this.alreadySeenRef.current.handleOpen();
    }

    createList(){
        this.createNewList.current.handleOpen();
    }

    moveOntoNextMovie(){
        if(this.state.curIdex == this.movies.length - 1){
            this.setState({curIdex: 0, displayFilm: true})
        }
        else{
            this.setState({curIdex: this.state.curIdex + 1, displayFilm: true})
        }
    }

    render(){
        const movie = data.getMovieInfo(this.movies[this.state.curIdex]);
        console.log(data.getUserInfo('admin@mail.com'))
        const { classes } = this.props;
        if(this.state.displayFilm){
            return (
            <div className={classes.movieRoot}>
                <AlreadySeenDialog ref={this.alreadySeenRef} moveOn={this.moveOntoNextMovie}/>
                <AppBar/>
                <h3 style={{paddingLeft: '1%', color: 'white'}}>Guest Code: {data.getUserInfo('admin@mail.com').guestCode}</h3>
                <Grid container className={classes.headers} spacing={3} justify="center">
                    <Grid item key="title" xs={5}>
                        <Paper className={classes.headerPaper} variant="outlined"><b>{movie.title}</b></Paper>
                        <div dangerouslySetInnerHTML={{ __html: movie.trailer }} className={classes.frame}/>
                    </Grid>
                    <Grid item key="summary" xs={5}>
                        <Paper className={classes.headerPaper} variant="outlined"><b>Movie Summary</b></Paper>
                        <div className={classes.frame}>
                            <Paper variant="outlined" className={classes.summary}>{movie.summary}</Paper>
                        </div>
                        <Grid container spacing={2} justify="center" className={classes.actors}>
                            {movie.actors.map((actor) => (
                                <Grid key={actor.name} item>
                                    <img className={classes.actorPic} src={actor.image}/>
                                    <p className={classes.actor}><b>{actor.name}</b></p>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justify="center" className={classes.likeDislike}>
                        <Grid item>
                            <IconButton className={classes.largeButton} onClick={this.dislikeMovie}>
                                <SvgIcon viewBox="0 0 74 74" width="512" height="512" className={classes.largeIcon}>
                                    <path d="m40.679 67.153a1 1 0 0 1 -.922-1.388l6.143-14.577-7.949-6.417a1 1 0 0 1 -.291-1.172l5.854-13.664-9.814-6.435a1 1 0 0 1 -.331-1.314l4.722-8.681a16.394 16.394 0 0 1 14.687-8.99 18.944 18.944 0 0 1 13.791 6.285 20.587 20.587 0 0 1 5.361 15.589c-1.535 18.536-29.463 39.674-30.652 40.565a1 1 0 0 1 -.599.199zm-.887-23.463 7.945 6.41a1 1 0 0 1 .294 1.167l-4.9 11.646c7.371-6.1 25.639-22.563 26.811-36.694a18.334 18.334 0 0 0 -4.842-14.065 16.939 16.939 0 0 0 -12.32-5.639 14.4 14.4 0 0 0 -12.931 7.95l-4.282 7.872 9.74 6.386a1 1 0 0 1 .371 1.23z"/><path d="m33.321 69.485a1 1 0 0 1 -.6-.2c-1.188-.89-29.116-22.027-30.651-40.564a20.585 20.585 0 0 1 5.361-15.591 18.944 18.944 0 0 1 13.791-6.283 17.852 17.852 0 0 1 12.816 5.632 1 1 0 0 1 .162 1.174l-5.991 11.015 9.74 6.386a1 1 0 0 1 .371 1.23l-5.884 13.738 7.945 6.415a1 1 0 0 1 .294 1.167l-6.432 15.27a1 1 0 0 1 -.922.612zm-12.099-60.638a16.939 16.939 0 0 0 -12.322 5.639 18.335 18.335 0 0 0 -4.837 14.071c1.303 15.724 23.759 34.319 28.842 38.343l5.634-13.375-7.949-6.425a1 1 0 0 1 -.291-1.172l5.854-13.663-9.81-6.431a1 1 0 0 1 -.331-1.314l6.072-11.164a15.759 15.759 0 0 0 -10.862-4.509z"/>
                                </SvgIcon>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.largeButton} onClick={this.likeMovie}>
                                <FavoriteIcon fontSize="large" className={classes.largeIcon}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Button style={{
                        backgroundColor: "#8a2be2",
                        fontSize: "18px",
                        color: "white",
                        fontFamily: [
                            'Trebuchet MS',
                            'sans-serif',
                        ].join(',')
                    }}
                    variant="contained" onClick={this.alreadySeen}>I've already seen this</Button>
                </Grid>
            </div>);
        } else {
            return(
                <div>
                    <AppBar/>
                    <h3 style={{paddingLeft: '1%', color: 'white'}}>Guest Code: {data.getUserInfo('admin@mail.com').guestCode}</h3>
                    <div className={classes.addToListSection}>
                        <NewListForMovieDialog ref={this.createNewList} moveOn={this.moveOntoNextMovie} addMovie={this.addToList}/>
                        <Grid container className={classes.headers} spacing={3} justify="center">
                            <Grid item key="title" xs={5}>
                                <Paper className={classes.headerPaper} variant="outlined"><b>{movie.title}</b></Paper>
                                <div dangerouslySetInnerHTML={{ __html: movie.trailer }} className={classes.frame}/>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper className={classes.headerPaper} variant="outlined"><b>Where to Watch</b></Paper>
                                <div className={classes.frame}>
                                    <Paper variant="outlined" className={classes.watchOptions}>
                                        <List>
                                            {movie.whereToWatch.map((text) => (
                                                <ListItem key={text} className={classes.whereWatch} id={text}>
                                                    <Typography className={classes.whereWatch}>{text}</Typography>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </div>
                                <br/>
                                <Paper className={classes.headerPaper} variant="outlined">
                                    Add to List | 
                                    <Button style={{ color: 'white',
                                        fontFamily: [
                                            'Trebuchet MS',
                                            'sans-serif',
                                            ].join(',')}}
                                        onClick={this.createList}
                                    ><u>New List</u>
                                    </Button>
                                </Paper>
                                <ThemeProvider theme={darkTheme}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="list-select">List</InputLabel>
                                    <Select className={classes.listSelect} labelId="list-select" className={classes.listSelect} onChange={this.addToList}>
                                        {data.getUserLists('admin@mail.com').map((list) => (
                                            <MenuItem value={list.name}>{list.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                </ThemeProvider>
                            </Grid>
                            <Button style={{
                                backgroundColor: "#8a2be2",
                                fontSize: "18px",
                                color: "white",
                                fontFamily: [
                                    'Trebuchet MS',
                                    'sans-serif',
                                ].join(',')
                            }}
                            variant="contained" onClick={this.moveOntoNextMovie}>I don't want to add this movie.</Button>
                        </Grid>
                    </div>
                </div>
            );
        }
    }
}

export default withStyles(styles, {withTheme: false})(HomeViewing);