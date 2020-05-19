import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';


class UserList extends Component {

    render () {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myUsers.map((user) => {
                            return (
                                <li className="list-group-item"
                                 key={user.id}
                                 onClick={() => this.props.selectUser(user)}> 
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){ // fonction qui lie react a redux en mettant la data dans les props
    console.log(state.users);
    return {
        myUsers: state.users
    }
}

function mapDispatchToProps(dispatch) { // renvoie l'action à tous les reducers qui s'en occupent en mettant l'information dans le state
    return bindActionCreators({selectUser:selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList); // connexion entre react et redux