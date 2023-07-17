import { Component } from 'react';
import classes from './User.module.css';

//starting class
//PS: extending 'Component' to use props
class User extends Component{

  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
  
}

/* --| function-based component |--
const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};*/

export default User;
