import React, { Component } from 'react';

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }
    
    handleClick = () => {
        const changeMood = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({mood: changeMood})
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}