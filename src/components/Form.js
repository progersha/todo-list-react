import React from "react"

function Form() {
    return (
        <div className="add-to-do">
            <i className="fa fa-plus-circle plus"></i>
            <input type="text" id="input" placeholder="Add a to-do" minLength="1"></input>
        </div>
    )
}

export default Form
