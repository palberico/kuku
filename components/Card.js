// React
import React, { Component } from 'react';

// Styles
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
  Body,
  Left,
  CardItem,
  Thumbnail,
  Card,
  Footer,
} from 'native-base';

// Redux
import { connect } from 'react-redux';

class CardComp extends Component {

  // Open Description Component onPress of Card
  showDescription = (title, category) => {
    if (this.props.category){
      this.props.history.push(`/description/${title}/${category}`)
    } else {
      this.props.history.push(`/description/${title}/kuku`)
    }
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.showDescription(this.props.item['Title'], this.props.item['Handle'])}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  style={styles.thumb}
                  source={{uri:this.props.item['logo']}} />
                <Body>
                  <Text>{this.props.item['Title']}</Text>
                  <Text note>{this.props.item['Variant Price']}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body>
                <Image
                  style={styles.cardImage}
                  source={{uri:this.props.item['Image Src']}}
                />
              </Body>
            </CardItem>
            <Footer style={styles.cardFooter} />
          </Card>
        </TouchableHighlight>
      </View>
    )
  }
};

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

const styles = {
  cardImage:{
    width: deviceX,
    height: deviceY/ 2,
    resizeMode: 'contain',
  },
  cardFooter:{
    width: 10,
    backgroundColor: '#ffffff',
  },
  thumb:{
    resizeMode: 'contain',
  },
};

export default connect()(CardComp);
