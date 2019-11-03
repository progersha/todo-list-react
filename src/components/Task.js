import React, {Component} from "react"
import {render} from 'react-dom';


class Task extends Component {
    render() {
        return (
            <p className="text">{this.props.text}</p>
        )
    }
}

export default Task
