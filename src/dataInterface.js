import * as db from './systemData';

export function generateNewList(email, listName){
    var created =  "Created a new list called " + listName;
    db.emailsToInfo[email].lists.push({
        "name": listName,
        "movies": []
    });
    db.emailsToInfo[email].history.push(created);
}

export function addMovieToList(email, listName, movieName){
    var created = "Liked the movie " + movieName;
    var i;
    var lists = db.emailsToInfo[email].lists;
    for(i=0; i<lists.length; i++){
        if(lists[i].name === listName){
            lists[i].movies.push(movieName);
        }
    }
    db.emailsToInfo[email].history.push(created);
}

// Liked and disliked variables should both be lists, oldEmail could be the same, unupdated email but it's just in case the email is updated
export function editUserInfo(oldEmail, email, name, likedGenres, dislikedGenres, likedMovies, dislikedMovies){
    db.emailsToInfo[oldEmail].name = name;
    db.emailsToInfo[oldEmail].likedGenres = likedGenres;
    db.emailsToInfo[oldEmail].likedMovies = likedMovies;
    db.emailsToInfo[oldEmail].dislikedGenres = dislikedGenres;
    db.emailsToInfo[oldEmail].dislikedMovies = dislikedMovies;
    db.emailsToInfo[oldEmail].dislikedMovies = dislikedMovies;
    db.emailsToInfo[oldEmail].email = email;
}

export function getUserInfo(email){
    return db.emailsToInfo[email];
}

export function getUserLists(email){
    return db.emailsToInfo[email].lists;
}

export function getUserFriends(email){
    return db.emailsToInfo[email].friends;
}

export function getMovies(){
    return db.movieList;
}

export function getMovieInfo(name){
    return db.movieToInfo[name];
}

export function getGenres(){
    return db.genres;
}

export function addNewUser(email, name, password, likedGenres, dislikedGenres, likedMovies, dislikedMovies){
    db.emailsToInfo[email] = {
        "lists": [],
        "friends": [],
        "name": name,
        "password": password,
        "likedGenres": likedGenres,
        "dislikedGenres": dislikedGenres,
        "likedMovies": likedMovies,
        "dislikedMovies": dislikedMovies,
        "friends": [],
        "history": [],
        "guestCode": "code",
        "email": email
    }
}