import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import FriendListItem from './FriendListItem';
import testData from './testData';

export default class FriendListScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ScrollView>
        {
          testData.map(function(friend, i) {
            return (
              <FriendListItem name={friend.name} key={i}/>
            )
          })
        }
      </ScrollView>
    )
  }
}
