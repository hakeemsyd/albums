/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

type Props = {
};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
            <Header headerText={'Albums'}></Header>
            <AlbumList style={styles.albumListStyle}/>
      </View>
    );
  }
}

const styles = {
  albumListStyle: {
    height: 100,
    width: null,
    flex: null,
  }
};
