import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        const {myActiveUser} = this.props;

        if (!myActiveUser) {
            return <div> No user selected</div>
        }

        return (

            <div>
                <h3>{myActiveUser.name}</h3>
                <ul>
                    <li>Id: {myActiveUser.id}</li>
                    <li>Rôle: {myActiveUser.role}</li>
                    <li>Statut :{myActiveUser.name}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myActiveUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);