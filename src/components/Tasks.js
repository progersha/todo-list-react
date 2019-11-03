import React from "react"
import {render} from 'react-dom';
import Task from "../components/Task.js"

function Tasks() {
    const tasks = [
        { text: 'Meat', closed: false},
    ];
    return (
        <div className="content">
            <ul id="list">
                <li className="item">
                    <i className="fa fa-check-circle co"></i>
                    <Task text></Task>
                    <i className="fa fa-trash-o de"></i>
                </li>
            </ul>
        </div>
    )
}

export default Tasks
