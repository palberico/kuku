import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';


export default class SpinnerExample extends Component {

  render() {
    return (
      <Container>
        <Content style={styles.spin}>
          <Spinner color='black' />
        </Content>
      </Container>
    );
  }
}

const styles = {
    spin: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
}