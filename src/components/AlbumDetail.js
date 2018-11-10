import React, { Component } from 'react';
import { Text } from 'react-native';

type Props = {
  key: string;
  album: string;
};

type State = {

};
class AlbumDetail extends Component<Props, State> {
  render() {
    const { album } = this.props;
    return (
      <Text>{album.title} - {album.artist}</Text>
    );
  }
}

export default AlbumDetail;
