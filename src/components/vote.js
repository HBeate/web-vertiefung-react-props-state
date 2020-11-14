import React, { Component } from 'react';
import styles from './Vote.module.css';

class Vote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            mouseOverCount: 0
        };
    }

    voted = () => {
        this.setState({     //muss die Methode aufrufen, um den State zu ändern, damit er dann neu zeichnet (render())
            counter: this.state.counter + 1   //schreibt den wert in die state Variable counter hinein und sagt -> render
        });
    }

    mouseOverCount = () => {
        this.setState({
            mouseOverCount: this.state.mouseOverCount + 1
        })
    }

    render() {
        return (
            <div className={styles.card} onClick={this.voted} onMouseOver={this.mouseOverCount} >
                <h1>{this.props.candidate} ({this.props.age})</h1>
                <h2>{this.state.counter}</h2>
                <h4>{this.state.mouseOverCount}</h4>
            </div >
        );
    }
}

export default Vote;