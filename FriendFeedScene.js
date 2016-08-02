import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeedItem from './FeedItem.js';

export default class FriendFeedScene extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <FeedItem />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 12
  }
});
