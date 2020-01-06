import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import * as scoreAPI from "./utils/score-api";
// import userService from "./utils/userService";
// import SignupPage from "./pages/SignUpPage/SignUpPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import GameBoard from "./components/GameBoard/GameBoard";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Route path="/">
        <div className="App">
        

          <header className="App-header">{/* <NavBar /> */}
          <nav className="nav-bar">
            <h2>2048 </h2>
            <section className='links-container'>
              <Link className='links' to="/game">Game</Link>
              <Link className='links' to="/leaderboard">Leaderboard</Link>
            </section>
          </nav></header>
          <main className="container">
            <GameBoard />
            {/* <Route exact path="/" render={({ history }) => <GameBoard />} /> */}
          </main>
        </div>
      </Route>
    );
  }
}

export default App;
