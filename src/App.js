import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CinematchBar from './cinematchBar';
import HomeViewing from './showMovies';
import Landing from './SignIn';
import './App.css';
import GuestCode from './GuestCode';

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
        <Route exact path="/landing" component={Landing} signInStatus={false}/>
        <Route exact path="/" render={(props) => (<p></p>)} />
        <Route exact path="/guestcode" component={GuestCode} signInStatus={false}/>
        <Route exact path="/homeViewing" component={HomeViewing} />       
      </div>
    </Router>
  );
}

export default App;
