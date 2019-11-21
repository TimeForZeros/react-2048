import React, { Component } from "react";
import "./GameBoard.css";

let board = [
    [0, 0, 0, 0], //Row 1 idx 0
    [0, 0, 0, 0], //Row 2 idx 1
    [0, 0, 0, 0], //Row 3 idx 2
    [0, 0, 0, 0] //Row 4 idx 3
  ];


class GameBoard extends Component {
  render() {
    let thing = <p id="score"> daddy </p>;
    return (
      <div>
        <div className="main">
          <h2> 2048</h2>
          <section className="grid">
            
            <div id="c0r0"></div>
            <div id="c1r0"></div>
            <div id="c2r0"></div>
            <div id="c3r0"></div>

            <div id="c0r1"></div>
            <div id="c1r1"></div>
            <div id="c2r1"></div>
            <div id="c3r1"></div>

            <div id="c0r2"></div>
            <div id="c1r2"></div>
            <div id="c2r2"></div>
            <div id="c3r2"></div>

            <div id="c0r3"></div>
            <div id="c1r3"></div>
            <div id="c2r3"></div>
            <div id="c3r3"></div>

          </section>
        </div>
      </div>
    );
  }
}

export default GameBoard;
