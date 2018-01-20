import React, { Component } from 'react'
import { View, Text, Platform, Dimensions, Image } from 'react-native';
import { NativeRouter, Route, Switch, withRouter, Link } from 'react-router-native';
import ImageSlider from 'react-native-image-slider';
import DummyData from './DummyData'
import Nav from './Nav'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { connect } from 'react-redux';
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
  Drawer,
} from 'native-base';

class Description extends Component {
  state = { position: 1, interval: null, liked: false  };

  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  changeLike = () => {
    this.setState({liked: !this.state.liked})
  }

  return = () => {
    this.props.history.push('/shop')
    }

  goToCart = () => {
    this.props.history.push('/cart')
    }

  render() {
      return (
        <Container>
          <Nav />
        <Content>
          <View style={styles.container}>
          <Image source={{uri:this.props.product['Image Src']}} style={styles.imageStyle} />
            {/* TODO make this work by implementing an array from image property */}
              {/* <ImageSlider
                  images={this.props.product['Image Src']}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}
              /> */}
          </View>
          <Card style={styles.card}>
         <Grid>
              <Row>
                <Col>
            <Button block dark style={styles.btnOne}>
            <Text style={styles.textBtn1}>Buy from Retailer</Text>
          </Button>
          </Col>
          <Col>
          <Button iconLeft block dark style={styles.btnTwo} onPress={this.changeLike}>
          <Icon style={styles.iconBtn}
                name={this.state.liked ? 'ios-heart' : 'heart'}
          />
          <Text style={styles.textBtn2}>Love It</Text>
          </Button>
          </Col>
          </Row>
          </Grid>
            <CardItem header>
            <Left>
              <Body>
                <Text style={styles.name}>Kerf</Text>
              {/* <Image style={styles.navLogo} source={require('../images/logos/kerflogo.png')} /> */}
              <Text note>Lone Peak</Text>
              </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.desc}>
                Made from repurposed skateboard decks, the Lone Peak were made for people on the go! With an updated wayfarer design and polarized lenses, these skateboard sunglasses have no shortage of style. 
              </Text>
              <View style={{height: 15}} />
              <Text style={styles.desc}>
              Lone Peak Elevation: 11,253′
                </Text>
                <View style={{height: 15}} />
                <Text style={styles.desc}>
                — Wood frames
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — Stainless steel spring-loaded hinges.
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — CR-39 polarized lenses. 
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — See our Size Guide for measurements 
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — Lightweight frames
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — Not Rx compatible. 
                </Text>
                <View style={{height: 5}} />
                <Text style={styles.desc}>
                — Includes a microfiber pouch
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.web}> Found on KERFGEAR.COM</Text>
            </CardItem>
         </Card>
           </Content>

           <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical onPress={this.return} >
         
            <Icon name='ios-pricetags-outline' />
                <Text>Shop</Text>
          </Button>

                      
          <Button vertical onPress={this.goToCart}>

                        {/* <Button badge vertical onPress={this.addLike}>
                        <Badge><Text>{this.state.counter}</Text></Badge> */}
                        
            <Icon name='md-heart-outline' />
                  <Text>Loved</Text>
          </Button>
        </FooterTab>
      </Footer>
          </Container>
      );
  }
}
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').height
const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

const styles = {
  imageStyle:{
    width: deviceX,
    height: deviceY/ 2,
    resizeMode: 'contain',
  },
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
    marginLeft: '2%',
  },
  web: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 15,
  },
  btnOne:{
    flex: 1,
    width: deviceX/2.2,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  btnTwo:{
    flex: 1,
    width: deviceX/2.2,
    marginRight: 'auto',
    marginLeft: 'auto'
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
  // navLogo: {
  //   height: deviceHeight / 15,
  //   width: deviceWidth / 5,
  //   marginTop: 2
  // },
  card: {
    marginTop: 25,
  },
}

const mapStateToProps = (state) => {
  return {
    product: state.products.products.find( p => p['Handle'] === 'half-dome')
  }
}

export default connect(mapStateToProps)(Description);
