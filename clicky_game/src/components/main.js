import React, { Component } from "react";
import ClickerNav from "./navBar"
import IMGdata from "./images"

class ClickerMain extends Component {
    state = {
        images: [],
        score: 0,
        topscore: 0,
    };

    componentDidMount() {
        this.loadImages(IMGdata);
    }
    loadImages = (res) => {
        this.setState({images: res})
        console.log(res)
    }

    render() {
        return (
            <div>
            <ClickerNav 
            score={this.state.score}
            topscore={this.state.topscore} />
            </div>
        )
    }
}

export default ClickerMain;

