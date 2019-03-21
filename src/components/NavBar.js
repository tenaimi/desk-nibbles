import React, { Component } from "react"

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <a className="navbar-brand" href="#">Desk Nibble Challenge</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar