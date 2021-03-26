import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: "Sun, main sequence"
    };

    changeStateHandler = event => {
        this.setState(
            {
                username: event.target.value
            }
        );
    };

  render() {
      const style1 = {
          width: '40%',
          margin: '16px 30%',
          border: '1px solid #eee',
          boxShadow: '0 2px 2px #ccc',
          padding: '16px',
          textAlign: 'center',
          fontWeight: 'bold'
      }

    return (
      <div>
        <UserInput
        change={this.changeStateHandler}
        uname={this.state.username}
        style={style1}
        />
        <UserOutput username='Stellar Evo' stateUsername={this.state.username}/>
      </div>
    );
  }
}

export default App;
