import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import DummyData from './DummyData'
import CardComp from './Card'
import Nav from './Nav'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  DeckSwiper,
} from 'native-base'

class Shop extends Component {

  openDescription = () => {
  this.props.history.push('/description')
  }

  openSettings = () => {
    this.props.history.push('/settings')
    }

  openCart = () => {
    this.props.history.push('/cart')
    }

  render(){
    return(
     <Container style={styles.content}>
       <Nav />
        <Content scrollEnabled={false}>
          <View style={styles.shop}>
            <DeckSwiper
              ref={(c) => this._deckSwiper = c}
              dataSource={DummyData}
              onSwipeLeft={this.leftAlert}
              onSwipeRight={this.rightAlert}
              renderItem={item =>
              <CardComp item={item} />
            }/>
          </View>
        </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openSettings}>
                 <Icon name='ios-settings-outline' />
                   <Text>Settings</Text>
               </Button>
               <Button vertical onPress={this.openDescription}>
                 <Icon name='ios-information-circle-outline' />
                   <Text>Description</Text>
               </Button>
               <Button vertical onPress={this.openCart}>
                 <Icon name='md-heart-outline' />
                   <Text>Loved</Text>
               </Button>
             </FooterTab>
           </Footer>
     </Container>

    )
  }
}

let styles = {
  shop: {
    flex: 1,
    marginTop: 50,
  },
  content:{
    backgroundColor: '#000000'
  },
  footer:{
    backgroundColor: '#ffffff'
  },
}

export default Shop;
