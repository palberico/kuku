import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Dimensions } from 'react-native';
import {
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Body,
  View,
} from 'native-base';

class CartCards extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Grid>
            <Col>
              <Row>
                  <View>
                <Card style={styles.card}>
                  <Text>1</Text>
                </Card>
                </View>
              </Row>
            </Col>
            <Col>
              <Row>
                <Card style={styles.card}>
                  <Text>2</Text>
                </Card>
              </Row>
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}

let styles = {
    card:{
      height: 200,
      width: 200,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  }


export default CartCards;

