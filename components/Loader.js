import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';


export default class SpinnerExample extends Component {

  render() {
    return (
      <Container style={styles.spin}>
        <Content>
          <Spinner color='black' />
          <Spinner color='white' />
        </Content>
      </Container>
    );
  }
}


const styles = {
    spin: {
      marginTop: '65%',
    },
}
