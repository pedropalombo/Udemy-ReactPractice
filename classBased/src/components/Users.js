import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

// --| class-oriented |--
class Users extends Component {

  //setting initial states
  constructor() {
    super();

    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  //checks for updates on DOM, and checks if there're no users found
  // \-> for Error Boundary practicing purpose
  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('No users provided!');
    }

  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers
      }
    });  //using more OOP-oriented programming
  }

  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/* --| function-oriented |--
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};*/

export default Users;
