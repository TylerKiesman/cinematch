import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as data from './dataInterface';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

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
    },
    summary: {
        backgroundColor: "black",
        color: 'white',
        borderColor: '#5e5e5e',
        border: '1px solid',
        paddingLeft: '5px',
        paddingRight: '5px',
        fontSize: 20,
        height: 200
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
        width: '50%'
    }
});

class HomeViewing extends React.Component{
    constructor(props){
        super(props);
        this.movies = data.getMovies();
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
        const movie = data.getMovieInfo(this.movies[this.state.curIdex]);
        console.log(movie);
        const { classes } = this.props;
        return (
        <div className={classes.movieRoot}>
            <AppBar/>
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
            </Grid>
        </div>);
    }
}

export default withStyles(styles, {withTheme: false})(HomeViewing);