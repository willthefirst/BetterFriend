import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import FriendListItem from './FriendListItem';
import FriendNotesScene from './FriendNotesScene';
import testData from './testData';

export default class FriendListScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  _handleFriendItemPress(friend) {
    const route = {
      component: FriendNotesScene,
      title: friend.name,
      passProps: { notes: friend.notes }
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
                name={friend.name}
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
