import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import * as scoreAPI from "./utils/score-api";
// import userService from "./utils/userService";
// import SignupPage from "./pages/SignUpPage/SignUpPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from './components/Footer/Footer';
class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <Switch>
      <Route exact path="/" render={({history})=> 
        <div className="App">
          <header className="App-header">{/* <NavBar /> */}
          <nav className="nav-bar">
            <h2>2048 </h2>
            <section className='links-container'>
              <Link className='links' to="/" >Game</Link>
              <Link className='links' to="/leaderboard" >Leaderboard</Link>
            </section>
          </nav></header>
          <main className="container">
            <GameBoard history={history}/>
          </main>
          <Footer />
        </div>
      }
      />
      </Switch>
    );
  }
}

export default App;
