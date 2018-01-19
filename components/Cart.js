import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text, Dimensions } from 'react-native'
import DummyData from './DummyData'
import Nav from './Nav'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
} from 'native-base'

class Cart extends Component {

  openShop = () => this.props.history.push('/shop')

  render(){
    return(
      <Container style={styles.content}>
        <Nav />
        <Content>
          <Grid>
            <Col>
              <Row>
                <Card>
                  <Text>1</Text>
                </Card>
              </Row>
            </Col>
            <Col>
              <Row>
                <Card>
                  <Text>2</Text>
                </Card>
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
}

let styles = {
  content:{
    backgroundColor: '#000000'
  },
}

export default Cart;