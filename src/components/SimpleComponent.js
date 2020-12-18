import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }
    render() {
        return (
            <div onClick={() => this.setState({ mood: 'sad'})}>
                {this.state.mood}
            </div>
        )
    }
}
