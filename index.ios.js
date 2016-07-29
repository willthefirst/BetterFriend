import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet } from 'react-native';
import testData from './testData';
import FriendListItem from './FriendListItem';

// User can add a contact
  // AUTOCOMPLETES FROM CONTACTS
// User can remove a friend


class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView style={styles.topMargin}>
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

const styles = StyleSheet.create({
  topMargin: {
    marginTop: 20,
    backgroundColor: 'lightblue'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
