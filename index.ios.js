import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS} from 'react-native';
import FriendListScene from './FriendListScene';
import AddFriendScene from './AddFriendScene';

class AwesomeProject extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleSubmitNewFriend = this.handleSubmitNewFriend.bind(this);
  }

  handleSubmitNewFriend() {
    this.refs.nav.pop();
  }

  handleAddFriend() {
    const route = {
      component: AddFriendScene,
      title: 'Add New Friend',
      rightButtonTitle: 'Done',
      onRightButtonPress: () => { this.handleSubmitNewFriend() }
    }
    this.refs.nav.push(route)
  }

  render() {
    return (
      <NavigatorIOS
        ref= 'nav'
        initialRoute={{
          component: FriendListScene,
          title: 'My Close Friends',
          rightButtonTitle: 'Add',
          onRightButtonPress: () => { this.handleAddFriend() }
        }}
        style={{flex:1}} />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
