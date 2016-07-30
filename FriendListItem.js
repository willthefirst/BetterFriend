import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class FriendListItem extends Component {

  convertToDays(timestamp) {
    return Math.floor(timestamp / (1000 * 60 * 60 * 24));
  }

  daysSinceLastInteraction(mostRecent) {
    return Math.floor(this.convertToDays(Date.now() - mostRecent));
  }

  daysUntilNextInteraction(targetFrequency, mostRecent) {
    return targetFrequency - this.daysSinceLastInteraction(mostRecent);
  }

  needToInteract(targetFrequency, mostRecent) {
    if (this.daysSinceLastInteraction(mostRecent) > targetFrequency) {
      return true
    }
    return false
  }

  render() {
    let friendPic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    // Determine if
    const itemStyle = [styles.friendListItem];
    const friend = this.props.data;
    // console.error(friend);
    if (this.needToInteract(friend.interactions.targetFrequency, friend.interactions.mostRecent)) {
      itemStyle.push(styles.needsToInteract);
    };

    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={itemStyle}>
          <Image source={friendPic} style={styles.friendPic} />
          <Text style={styles.friendText}>{friend.name}</Text>
          <Text style={styles.lastInteraction}>{this.daysUntilNextInteraction(friend.interactions.targetFrequency, friend.interactions.mostRecent)} days left</Text>
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
    fontSize: 18,
    flex: 4
  },
  needsToInteract: {
    backgroundColor: 'red'
  },
  lastInteraction: {
    flex: 1,
    color: '#888',
    textAlign: 'center',
    fontSize: 12
  }
});
