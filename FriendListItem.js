import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class FriendListItem extends Component {

  convertToDays(timestamp) {
    return Math.floor(timestamp / (1000 * 60 * 60 * 24));
  }

  daysUntilNextInteraction(targetFrequency, mostRecent) {
    return targetFrequency + this.convertToDays(mostRecent) - this.convertToDays(Date.now());
  }

  render() {
    let friendPic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    // Determine if
    const daysLeftStyle = [styles.daysLeft];
    const friend = this.props.data;
    const daysLeft = this.daysUntilNextInteraction(friend.interactions.targetFrequency, friend.interactions.mostRecent);
    // console.error(friend);
    if (daysLeft <= 0) {
      daysLeftStyle.push({color: 'red'});
    };

    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.friendListItem}>
          <Image source={friendPic} style={styles.friendPic} />
          <Text style={styles.friendText}>{friend.name}</Text>
          <Text style={daysLeftStyle}>{daysLeft} days left</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  friendListItem: {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    fontSize: 18,
    flex: 3,
    color: "#333"
  },
  daysLeft: {
    flex: 1,
    color: '#888',
    textAlign: 'center',
    fontSize: 12
  }
});
