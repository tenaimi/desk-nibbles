import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar";
import Card from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      snackers: [],
      loading: true
    }
    this.massageData = this.massageData.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/snackers").then(res => {
      this.setState({ snackers: res.data, loading: false })
    });
  }

  massageData() {
    const result = []
    if (!this.state.loading) {
      const data = this.state.snackers.stocked;
      for (let value in data) {
        result.push({
          email: value,
          title: data[value][0].title,
          image: data[value][0].image,
          price: data[value][0].price
        });
      }
    }
    return result
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <br />
        <div className="container">
          <div class="col-lg-18">
            <div className="card-deck mb-4">
              {
                this.massageData().map(snacker => {
                  console.log(snacker)
                  return <Card title={snacker.title} image={snacker.image} price={snacker.price} email={snacker.email} />
                })
              }
            </div>
          </div>
          <br />
          <div className="alert alert-primary" role="alert">
            The total price is: ${this.state.snackers ? this.state.snackers.totalPrice : " "}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
