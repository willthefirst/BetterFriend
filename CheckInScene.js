import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';

var ImagePicker = require('react-native-image-picker');

export default class CheckInScene extends Component {
  constructor(props) {
    super(props);
    this.state = {imageSource: 'nothing'};
  }

  focusNextField(nextField) {
   this.refs[nextField].focus();
  }

  handlePickImage() {
    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
    * The first arg is the options object for customization (it can also be null or omitted for default options),
    * The second arg is the callback which sends object: response (more info below in README)
    */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.setState({
          imageSource: source.uri
        });

        console.log('State', this.state);
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Add a photo or screenshot:</Text>
          <TouchableHighlight
            style={styles.imagePicker}
            onPress={() => (this.handlePickImage())}>
            <Image
              source={{uri: this.state.imageSource}}
              style={{height: 350, width: 350}} />
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Text>Add a description:</Text>
          <TextInput
            ref="2"
            style={styles.input}
            placeholder="Description"
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
  },
  imagePicker: {
    marginTop: 6,
    backgroundColor: 'blue',
    height: 350,
    width: 350,
    flex: 1,
    alignSelf: 'center'
  }
})
