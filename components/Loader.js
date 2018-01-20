import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';


export default class SpinnerExample extends Component {

  render() {
    return (
      <Container style={styles.spin}>
        <Content>
          <Spinner color='black' />
        </Content>
      </Container>
    );
  }
}

const styles = {
    spin: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
}
