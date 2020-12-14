// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    state = {
    mood: "happy" 
    }

    switchMood = () => {
        if (this.state.mood === "happy") {
            this.setState({mood: "sad"})
        } else if (this.state.mood === "sad") {
            this.setState({mood: "happy"})
        }
    }

    render() {
        return <div onClick={this.switchMood}>{this.state.mood}</div>;
      }
    }

export default SimpleComponent;