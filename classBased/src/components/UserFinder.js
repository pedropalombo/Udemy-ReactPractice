import { Component, Fragment } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


// --| class-based |--
class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();

        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    //setter
    searchChangeHandler(event) {
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }

    //when everything is loaded & rendered, didMount() state is triggered
    componentDidMount() {
        this.setState(
            {
                filteredUsers: this.context.users
            }
        )
    }

    //'prevProps' & 'prevState' are default values 
    componentDidUpdate(prevProps, prevState) {

        //checks if the state passed is different then the current one, so it then may be changed
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState(
                {
                    filteredUsers: this.context.users.filter((user) => 
                        user.name.includes(this.state.searchTerm)
                    )
                }
            );
        }
        
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                
                {/* wrapping 'Users' with an Error-Handling class  */}
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>

            </Fragment>
        );
    }
}

export default UserFinder;