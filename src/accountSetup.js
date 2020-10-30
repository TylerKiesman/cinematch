import React from 'react';
import {addNewUser, getChecksLiked} from "./dataInterface";
import {Email} from "@material-ui/icons";
import * as db from "./systemData";

class AccountSetup extends React.Component{

    getChecksLiked = () => {
        let checks = document.getElementsByClassName('form-check-inline1');
        let arry = [];
        for (let i = 0; i < 21; i++) {
            if (checks[i].checked === true) {
                arry += checks[i].value;
            }
        }
        return arry
    }

    getChecksDisliked = () => {
        let checks = document.getElementsByClassName('form-check-inline');
        let arry = [];
        for(let i = 0; i < 21; i++) {
            if (checks[i].checked === true){
                arry += checks[i].value;
            }
        }
        return arry
    }

    addNewUser = (email, name, password, likedGenres, dislikedGenres, likedMovies, dislikedMovies) => {
        db.emailsToInfo[email] = {
            "lists": [],
            "name": name,
            "password": password,
            "likedGenres": [],
            "dislikedGenres": [],
            "likedMovies": likedMovies,
            "dislikedMovies": dislikedMovies,
            "friends": [],
            "history": [],
            "guestCode": "code",
            "email": email
    }
}
    render(){ 
        return (
            <body style={{backgroundColor: "#262626"}}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <div style={{backgroundColor: "black !important"}}>
            <form>
                <div class="form-group bg-#000000 text-white">
                    <label for="Username">Username:</label>
                    <input type="text" style={{backgroundColor: "#262626", color: "white"}} class="form-control bg-#262626 col-sm-2" id="Username" placeholder="Username"/>
                </div>
                <div class="form-group bg-#262626 text-white">
                    <label for="Email">Email:</label>
                    <input type="text" style={{backgroundColor: "#262626", color: "white"}} class="form-control bg-#262626 col-sm-2" id="Email" placeholder="Email"/>
                </div>
                <div class="form-group bg-#262626 text-white">
                    <label for="Password">Password:</label>
                    <input type="password" style={{backgroundColor: "#262626", color: "white"}} class="form-control bg-#262626 col-sm-2" id="Password" placeholder="Password"/>
                </div>
            </form>
            <div class="checkbox">
                <div class="checkbox bg-#262626 text-white col-xs-4">
                    <div class="control-group">
                        <p>Movie genres you like:<br/></p>
                        <div class="form-check-inline1">
                            <label class="form-check-inline1"><input type="checkbox" value="Action"/>Action</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Adventure"/>Adventure</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Comedy"/>Comedy</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Crime"/>Crime</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Drama"/>Drama</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Fantasy"/>Fantasy</label>
                            <label class="form-check-inline1"><input type="checkbox" value="Historical"/>Historical</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-inline"><input type="checkbox" value="Horror"/>Horror</label>
                            <label class="form-check-inline"><input type="checkbox" value="Magical_Realism"/>Magical Realism</label>
                            <label class="form-check-inline"><input type="checkbox" value="Mystery"/>Mystery</label>
                            <label class="form-check-inline"><input type="checkbox" value="Philosophical"/>Philosophical</label>
                            <label class="form-check-inline"><input type="checkbox" value="Political"/>Political</label>
                            <label class="form-check-inline"><input type="checkbox" value="Romance"/>Romance</label>
                            <label class="form-check-inline"><input type="checkbox" value="Saga"/>Saga</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-inline"><input type="checkbox" value="Satire"/>Satire</label>
                            <label class="form-check-inline"><input type="checkbox" value="Science_Fiction"/>Science Fiction</label>
                            <label class="form-check-inline"><input type="checkbox" value="Social"/>Social</label>
                            <label class="form-check-inline"><input type="checkbox" value="Speculative"/>Speculative</label>
                            <label class="form-check-inline"><input type="checkbox" value="Thriller"/>Thriller</label>
                            <label class="form-check-inline"><input type="checkbox" value="Urban"/>Urban</label>
                            <label class="form-check-inline"><input type="checkbox" value="Western"/>Western</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkbox">
                <div class="checkbox bg-#262626 text-white col-xs-4">
                    <div class="control-group">
                        <p>Movie genres you dislike:<br/></p>
                        <div class="form-check-inline">
                            <label class="form-check-inline"><input type="checkbox" value="Action"/>Action</label>
                            <label class="form-check-inline"><input type="checkbox" value="Adventure"/>Adventure</label>
                            <label class="form-check-inline"><input type="checkbox" value="Comedy"/>Comedy</label>
                            <label class="form-check-inline"><input type="checkbox" value="Crime"/>Crime</label>
                            <label class="form-check-inline"><input type="checkbox" value="Drama"/>Drama</label>
                            <label class="form-check-inline"><input type="checkbox" value="Fantasy"/>Fantasy</label>
                            <label class="form-check-inline"><input type="checkbox" value="Historical"/>Historical</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-inline"><input type="checkbox" value="Horror"/>Horror</label>
                            <label class="form-check-inline"><input type="checkbox" value="Magical_Realism"/>Magical Realism</label>
                            <label class="form-check-inline"><input type="checkbox" value="Mystery"/>Mystery</label>
                            <label class="form-check-inline"><input type="checkbox" value="Philosophical"/>Philosophical</label>
                            <label class="form-check-inline"><input type="checkbox" value="Political"/>Political</label>
                            <label class="form-check-inline"><input type="checkbox" value="Romance"/>Romance</label>
                            <label class="form-check-inline"><input type="checkbox" value="Saga"/>Saga</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-inline"><input type="checkbox" value="Satire"/>Satire</label>
                            <label class="form-check-inline"><input type="checkbox" value="Science_Fiction"/>Science Fiction</label>
                            <label class="form-check-inline"><input type="checkbox" value="Social"/>Social</label>
                            <label class="form-check-inline"><input type="checkbox" value="Speculative"/>Speculative</label>
                            <label class="form-check-inline"><input type="checkbox" value="Thriller"/>Thriller</label>
                            <label class="form-check-inline"><input type="checkbox" value="Urban"/>Urban</label>
                            <label class="form-check-inline"><input type="checkbox" value="Western"/>Western</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group bg-#262626 text-white">
                <label for="Liked_Movies">Movies you like:</label>
                <input type="text" style={{backgroundColor: "#262626", color: "white"}} class="form-control bg-#262626 col-sm-4" id="Liked_Movies"/>
            </div>
            <div class="form-group bg-#262626 text-white">
                <label for="Disliked_Movies">Movies you like:</label>
                <input type="text" style={{backgroundColor: "#262626", color: "white"}} class="form-control bg-#262626 col-sm-4" id="Disliked_Movies"/>
            </div>
            <button class="btn btn-sm btn-block text-white text-center  btn-outline-light col-sm-1" type="submit"
                    onClick={this.addNewUser(
                        document.getElementById("Email"),
                        document.getElementById("Username"),
                        document.getElementById("Password"),
                        this.getChecksLiked(),
                        this.getChecksDisliked(),
                        document.getElementById("Liked_Movies"),
                        document.getElementById("Disliked_Movies"))}>Sign up</button>
            </div>
        </body>);
    }
}

export default AccountSetup;