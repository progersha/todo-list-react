import React from "react"

function Header() {
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today  = new Date();
    return (
        <header className="header">
            <div id="date">{today.toLocaleDateString("en-US", options)}</div>
        </header>
    )
}

export default Header
