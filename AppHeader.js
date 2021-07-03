import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>CLASS-8th Attendence</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 29,
    backgroundColor: 'cyan',
    color: 'black',
    fontWeight: 'Bold',
    width: 320,
  }
});

