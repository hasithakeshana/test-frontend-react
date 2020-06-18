import React from 'react';
import {connect} from 'react-redux'
import {update_name} from '../../common/actions';
import {update_users} from '../../common/actions';

function LandingPage(props) {
    return (
        <div>
            <h1>{props.state.person.name}</h1>
            <button onClick={props.updateName}>update person</button>
            {props.state.users.length === 0 ? <p> No data found</p> :
              props.state.users.map(user=> <ul key={user.id}> {user.id}  , {user.email}</ul>)

            }
            <button onClick={props.updateUsers}>update users</button>
        </div>
    );
}
const  mapStateToProps = state => {
    console.log(state.users)
    return{
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateName : () => {dispatch (update_name('gamage'))},
        updateUsers : () =>{dispatch(update_users())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);
