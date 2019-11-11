import React from "react";

function ClickerNav(props){
    return (
    <div className="navbar sticky-top navbar-dark bg-primary">
        <a href="#" className="navbar-brand">Clicky Game</a>
        <div className="navbar-text mr-1">Top Score: {props.topscore}| Your Score: {props.score}</div>
    </div>
    )    
}

export default 
    ClickerNav
