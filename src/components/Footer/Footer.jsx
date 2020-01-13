import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
    return (
<footer >
    <span className='author'>
        Made by Victor Gonzalez
    </span>
    <span className='social'>
    <a href="https://github.com/timeforzeros"><img src="https://i.imgur.com/shL2H7U.png" title="GitHub" /></a>
    <a href="http://timeforzeros.com"><img src="https://i.imgur.com/NpEcYmL.png" title="Personal Website" /></a>
    <a href="https://linkedin.com/in/victorgonzalez0"><img src="https://i.imgur.com/K04kJ8Q.png" title="LinkedIn" /></a>
        
    </span>
</footer>
    )
}

export default Footer;