import React, { Component } from 'react'
import { View, Text, Platform, Image, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import DummyData from './DummyData'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  Container, 
  Header, 
  Title, 
  Content,
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Drawer
} from 'native-base';
 
class Description extends Component {
  constructor(props) {
      super(props);

      this.state = {
          position: 1,
          interval: null
      };
  }

  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  state = { liked: false }
  changeLike = () => {
    this.setState({liked: !this.state.liked})
  }

  render() {
      return (
        <Content>
        
          <View style={styles.container}>
              <ImageSlider
                  images={[
                      `https://cdn.shopify.com/s/files/1/1460/6104/products/KC8336D_12_spo.jpg?v=1514492356`,
                      `https://cdn.shopify.com/s/files/1/1460/6104/products/KC8336D_10_spo.jpg?v=1514492363`,
                      `https://cdn.shopify.com/s/files/1/1460/6104/products/KC8336D_7_spo.jpg?v=1514492370`,
                  ]}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}/>
          </View>
          <Card>
            <CardItem header>
            <Left>
              <Body>
              <Image style={styles.navLogo} source={require('../images/logos/kancanlogo.png')} />
              <Text note>Barlett Dore Jean</Text>
              </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.desc}>
                True blue ankle skinny jeans. Black washed denim with white fade. Ripped holes in both leg areas.  Cuffed hem. Paired it up with favorite sneakers or high heels. Versatile jeans that could transform from active wear to casual shoes for dinner date.
        
                ANKLE SKINNY
                9.5" RISE / 27" INSEAM
                21% COTTON
                20% POLYESTER
                58% RAYON
                1% SPANDEX
                MODELED IN SIZE 25
                MADE IN CHINA
              </Text>
              
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.web}> Found on KANCANUSA.COM</Text>
            </CardItem>
         </Card>
         <Grid>
              <Row>
                <Col>
            <Button block dark style={styles.btnOne}>
            <Text style={styles.textBtn1}>Buy from Retailer</Text>
          </Button>
          </Col>
          <Col>
          <Button iconLeft block dark style={styles.btnTwo} onPress={this.changeLike}>
          <Icon
                      style={styles.iconBtn}
                      name={this.state.liked ? 'ios-heart' : 'heart'}
                    />
                    <Text style={styles.textBtn2}>Love It</Text>
          </Button>
          </Col>
          </Row>
          </Grid>


          </Content>  
      );
  }
}

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 25,
    marginTop: 10,
  },
  nameNote: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
  },
  desc: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
  },
  web: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 15, 
  },
  btnOne:{
    flex: 1,
    marginLeft: 10,
    width: 200,  
  },
  btnTwo:{
    marginLeft: 30,
    width: 150,  
  },
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  textBtn2:{
    fontSize: 18,
    color: 'white'
  },
  iconBtn:{
    marginRight: 20,
    color: 'white'
  },
  navLogo: {
    height: deviceHeight / 25,
    width: deviceWidth / 3,
    marginTop: 2
  },
}
 
export default Description;

