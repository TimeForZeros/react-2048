import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import * as scoreAPI from './utils/score-api';
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
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className="container">
            <Route exact path="/" render={({ history }) => <GameBoard />} />
        </main>
      </div>
    );
  }
}

export default App;
