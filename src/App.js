import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: "Input New Username Here"
    };

// must accept p1 since we are passing an extra arg "sunny" below
    inputChangeHandler = (p1, event) => {
        this.setState(
            {
                // So the original state must contain the same key
                // (unchangable) only the value can be changed later
                username: event.target.value
                // username: 'yo'
                // username: p1

            }
        );
    };

  render() {
      // const style1 = {
      //     width: '40%',
      //     margin: '16px 30%',
      //     border: '1px solid #eee',
      //     boxShadow: '0 2px 2px #ccc',
      //     padding: '16px',
      //     textAlign: 'center',
      //     fontWeight: 'bold'
      // }

    return (
      <div>
        <UserOutput
        username='Hammerman'
        stateUsername={this.state.username}
        />
        <UserOutput
        username='Mon'
        stateUsername='Monday'
        />
        <UserOutput
        username='Star'
        stateUsername={this.state.username}
        />
        <UserInput
        change={this.inputChangeHandler.bind(this, 'a1')}
        // use below if the inputChangeHandler is not accepting p1
        // change={this.inputChangeHandler}
        uname={this.state.username}
        // style={style1}
        />
      </div>
    );
  }
}

export default App;
