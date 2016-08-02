import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class FeedItem extends Component {
  render() {
    return (
      <View style={styles.feedItemContainer}>
        <View style={{flex: 1, alignItems:'center', backgroundColor: 'pink', marginBottom: 18/3}}>
          <Image
            style={styles.feedImage}
            source={ require('./assets/images/feed-image.png') } />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Text style={styles.feedDescription}>here's an example image description. and some more stuff here.</Text>
          <Text style={styles.feedDate}>12/2/16</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  feedItemContainer: {
    flexDirection: 'column',
    marginBottom: 18,
  },
  feedImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain'
  },
  feedDescription: {
    flex: 4
  },
  feedDate: {
    flex: 1,
    textAlign: 'right'
  }
});
