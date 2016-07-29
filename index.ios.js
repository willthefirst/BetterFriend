import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, StyleSheet, Image } from 'react-native';

const testFriends = [
  'Rollie Williams',
  'Kat Lau',
  'Parker Phinney',
  'Dad',
  'Jake',
  'Mom',
  'Harry DiFrancesco',
  'Anna Heery',
  'Kenny Polyak'
];

class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView style={styles.topMargin}>
        {
          testFriends.map(function(name, i) {
            return (
              <Friend name={name} key={i}/>
            )
          })
        }
      </ScrollView>
    )
  }
}

class Friend extends Component {
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
  topMargin: {
    marginTop: 20,
    backgroundColor: 'lightblue'
  },
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
