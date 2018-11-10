import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

type Props = {
  key: string;
  album: string;
};

type State = {

};
class AlbumDetail extends Component<Props, State> {
  render() {
    const { album } = this.props;
    const { thumbnailStyle } = styles;
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image source={{ uri: album.thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={styles.titleStyle}>
            <Text style={styles.headerTextStyle}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.imageStyle} source={{ uri: album.image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(album.url)} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  }
};

export default AlbumDetail;
