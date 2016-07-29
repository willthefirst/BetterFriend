import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS} from 'react-native';
import FriendListScene from './FriendListScene';

// User can add a contact
  // autocomplete from contact
// User can remove a friend
// User can view notes on a friend

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FriendListScene,
          title: 'Friend List'
        }}
        style={{flex:1}} />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
