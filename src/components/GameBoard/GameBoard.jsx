import React, {Component} from 'react';
import './GameBoard.css';

class GameBoard extends Component {
   render(){

    let thing = <p id='score'></p>
    return(
        <div>
            {thing}
            {thing}
            {thing}
            {thing}
            {thing}
        </div>


    )}
}


export default GameBoard;