import React, { Component } from "react"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div class="card mb-4">
                <img class="card-img-top" src={this.state.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{this.state.title}</h5>
                    <p class="card-text">{this.state.email}</p>
                    <p class="card-text"><small class="text-muted">${this.state.price}</small></p>
                </div>
            </div>
        )
    }
}

export default Card