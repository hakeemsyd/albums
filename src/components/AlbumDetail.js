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
    const { thumbnail_image, url, title, artist, image } = this.props.album;
    const {
      thumbnailStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      titleStyle,
      imageStyle
    } = styles;
    
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={titleStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
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
