import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CinematchBar from './cinematchBar';
import HomeViewing from './showMovies';
import Landing from './SignIn';
import './App.css';
import AccountSetup from './accountSetup';
import AccountLists from './accountLists';
import GuestCode from './GuestCode';
import UserProfile from './userProfile';
import FriendProfile from './friendProfile';

// function App() {
//   return (
//     <CinematchBar signInStatus={true}/>
//   );
// }


// INFO ON ROUTING AND LOGIN https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
function App() {
  var bar = <CinematchBar signInStatus={true}/>

  // Place routes that you want in the router object below
  return (
    <Router>
      <div>
        {bar}
        <Route exact path="/" component={Landing} signInStatus={false}/>
        <Route exact path="/guestcode" component={GuestCode} signInStatus={false}/>
        <Route exact path="/settings" component={()=>(<AccountSetup signedUp />)}/>
        <Route exact path="/setup" component={AccountSetup}/>
        <Route exact path="/lists" component={AccountLists}/>
        <Route exact path="/homeViewing" component={HomeViewing} />
        <Route exact path="/profile" component={() => <UserProfile user={"admin@mail.com"} />} />
        <Route exact path="/friend" component={() => <FriendProfile user={"admin@mail.com"} />} />       
      
    
      </div>
    </Router>
  );
}

export default App;
