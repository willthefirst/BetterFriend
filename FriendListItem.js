import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class FriendListItem extends Component {
  render() {
    let friendPic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.friendListItem}>
          <Image source={friendPic} style={styles.friendPic} />
          <Text style={styles.friendText}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
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
  },
  friendText: {
    fontSize: 18
  }
});
