import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import FriendListItem from './FriendListItem';
import FriendNotesScene from './FriendNotesScene';
import FriendFeedScene from './FriendFeedScene';
import CheckInScene from './CheckInScene';
import testData from './testData';

export default class FriendListScene extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleSubmitCheckIn() {
    alert('Submitted Check In!');
    this.props.navigator.pop();
  }

  handleCheckIn(friend) {
    const route = {
      component: CheckInScene,
      title: 'Check In',
      rightButtonTitle: 'Submit',
      onRightButtonPress: () => {this.handleSubmitCheckIn()},
      passProps: {
        friend: friend,
        handleSubmitCheckIn: () => {this.handleSubmitCheckIn()}
      }
    };

    this.props.navigator.push(route);
  }

  _handleFriendItemPress(friend) {

    // TODO: this is the friend route, to be used for editing a friend's info or notes.
    // const route = {
    //   component: FriendNotesScene,
    //   title: friend.name,
    //   passProps: {
    //     friend: friend
    //   }
    // };

    const route = {
      component: FriendFeedScene,
      title: friend.name,
      rightButtonTitle: 'Check In',
      onRightButtonPress: () => { this.handleCheckIn(friend) },
      passProps: {
        friend: friend
      }
    };

    this.props.navigator.push(route);
  }

  render() {
    return (
      <ScrollView>
        {
          testData.map(function(friend, i) {
            return (
              <FriendListItem
                data={friend}
                key={i}
                onPress={() => this._handleFriendItemPress(friend)}
              />
            )
          }.bind(this))
        }
      </ScrollView>
    )
  }
}
