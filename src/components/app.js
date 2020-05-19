import React, { Component } from 'react';
import UserList from "../containers/user_list"
import DetailUser from "../containers/user_detail"

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList></UserList>
        <DetailUser></DetailUser>
      </div>
    );
  }
}
