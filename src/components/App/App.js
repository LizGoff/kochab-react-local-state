import React, { Component } from 'react';

// talking about local state today
// what going on in a specific components

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user:
        {
          name: 'Liz',
          city: 'Vancouver',
        }
    };
    // this.handelChange = this.handelChange.bind(this); This is in older versions of React
  }

  handleChange = (event) => {
    console.log('event.target.value', event.target.value);
    // this.state.user = event.target.value;
    this.setState({ user: { name: event.target.value, city: this.state.user.city } })
  }

  cityChange = (event) => {
    console.log('event.target.value', event.target.value);
    // this.state.user = event.target.value;
    this.setState({ user: { name: this.state.user.name, city: event.target.value } })
  }


  stateButton = (event) => {
    console.log('event.target.value', this.state.user);
    // this.setState ({ state });
  }

  render() {
    return (
      <div>
        <p> The current user is {this.state.user.name} </p>
        <p> She would like to move to {this.state.user.city} </p>

        <input onChange={this.handleChange} placeholder="User Name" />
        <input onChange={this.cityChange} placeholder="City" />

        <button onClick={this.stateButton} />

      </div>
    );

  }

}

export default App;
