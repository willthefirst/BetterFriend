import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class FriendListItem extends Component {
  render() {
    let friendPic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.friendListItem}>
        <Image source={friendPic} style={styles.friendPic} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  friendListItem: {
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },
  friendPic: {
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    marginRight: 12
  }
});
