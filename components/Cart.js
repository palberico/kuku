import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Dimensions, View } from 'react-native';
import Nav from './Nav';
import CartCards from './CartCards';
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
} from 'native-base';

class Cart extends Component {

  state = { loaded: false, items: [] }

  componentDidMount(){
    this.setState({ items: this.props.items.cart, loaded: true })
  }

  openShop = () => this.props.history.push('/shop')

  displayItems = () => {
    return this.state.items.map( item => {
      return (
        <Text>{item['Title']}</Text>
      )
    })
  }

  render(){
    if(this.state.loaded){
      return(
        <Container style={styles.content}>
          <Nav />
          <Content>
            <Grid>
              <Col>
                <Row>
                  <View>

                    {this.displayItems()}

                  </View>
                </Row>
              </Col>
            </Grid>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openShop}>
                <Icon name='ios-pricetags-outline' />
                  <Text>Shop</Text>
              </Button>
              <Button vertical>
                <Icon name='md-heart-outline' />
                  <Text>Loved</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      )
    }
    else{
      return(
        <Card>
          <Text>Loading...</Text>
        </Card>
      )

    }
  }
}

let styles = {
  content:{
    backgroundColor: 'white'
  },
}

const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}

export default connect(mapStateToProps)(Cart);
