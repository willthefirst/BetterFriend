import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, StyleSheet } from 'react-native';

export default class AddFriendScene extends Component {
  focusNextField(nextField) {
   this.refs[nextField].focus();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Enter their name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            autofocus={true}
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('2')}
            />
        </View>
        <View style={styles.container}>
          <Text>How often would you like to do stuff with them?</Text>
          <TextInput
            ref="2"
            style={styles.input}
            placeholder="Frequency of interaction"
            keyboardType="numeric"
            blurOnSubmit={true}
            />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 18
  },
  input: {
    paddingHorizontal: 12,
    marginTop: 6,
    height: 40,
    borderColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth
  }
})
