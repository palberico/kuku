import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { 
  Container, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Icon,
} from 'native-base';
import Nav from './Nav';

class Faq extends Component {

  return = () => {
    this.props.history.push('/shop')
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <Container>
        <Nav />
        <Content style={styles.container}>
          <View style={{height: 25}} />
          {/* Privacy Policy text below: */}
          <Text style={styles.title2}>Frequently Asked Questions </Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>What is Kuku? </Text>
          <View style={{height: 15}} />
          <Text>Kuku is a collection of web sites you may have never heard of. It is our goal to bring the best fashion, lifestyle and beauty products from around the web ready to purchase from your phone.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How do I download Kuku?</Text>
          <View style={{height: 15}} />
          <Text>If you're reading this, you probably already know the answer, but just in case, the Kuku app is FREE and available for download from the Apple App Store or Google Play for Android users.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How much does Kuku charge for its services?</Text>
          <View style={{height: 15}} />
          <Text>Kuku it totally free to use...that's right free-ninety-nine...the big goose egg! We are an affliate site, so our merchants pay us a commision based on sales through our site. All items available on our app are priced as per the retailer's websites and Kuku never charges a premium.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How do I find Love?</Text>
          <View style={{height: 15}} />
          <Text>Like the popular dating app, swipe right on items you love, swipe left to say nope.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Where is my shopping cart?</Text>
          <View style={{height: 15}} />
          <Text>Tap the Loved button with in the shopping screen to see the items you've Loved.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How do I checkout on Kuku?</Text>
          <View style={{height: 15}} />
          <Text>From the Loved screen, click on the item you wish to purchase to see additional pictures and a description of the item. From there simply click on the Buy from Retailer button to be linked to the retailer's web site.</Text>
          <View style={{height: 15}} />
          <Text>All transactions are handled by the retailer.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>What about shipping and returns?</Text>
          <View style={{height: 15}} />
          <Text>Since all transactions are handled by the retailer, you will be subject to their shipping and return policies. Please take a second to check them out.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How do I list my items Kuku?</Text>
          <View style={{height: 15}} />
          <Text>If you have an e-commerce site, and would like to list your items on Kuku, please email Pete and he'll take care of you.</Text>
          <View style={{height: 15}} />
          <Text>pete@kukukart.com</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Who is this Pete guy?</Text>
          <View style={{height: 15}} />
          <Text>He's the guy typing this FAQ section, and I'm honored you've read this far. For the record I am also co-founder of Kuku app and helped write the code with Max and Dan.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How do I contact Kuku?</Text>
          <View style={{height: 15}} />
          <Text>If you have any questions, comments, feedback or complaints regarding this app or any requests for technical support, then please feel free to contact us.</Text>
          <View style={{height: 15}} />
          <Text>support@kukukart.com</Text>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button vertical onPress={this.return} >
              <Icon name='ios-pricetags-outline' />
              <Text>Shop</Text>
            </Button>
            <Button vertical onPress={this.openSettings}>
              <Icon name='ios-settings-outline' />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
};

const styles = {
  title: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 20,
  },
  title2: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 25,
  },
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
};

export default Faq;