import React, { Component , PropTypes } from 'react';
import { Text , ScrollView } from 'react-native';

export default class FriendNotesScene extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  _handleBackPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView>
        <Text>{this.props.friend.notes}</Text>
      </ScrollView>
    )
  }
}
