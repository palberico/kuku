// import React, { Component } from 'react';
// import { Container,
//     Header,
//     Content,
//     Footer,
//     FooterTab,
//     Button,
//     Icon,
//     Text,
//     Badge } from 'native-base';

// export default class FooterTabsBadge extends Component {

//   state = { counter: 1}

//   addLike = () => {
//     this.setState({ counter: this.state.counter + 1})
//   }

//   render() {

//     return (
//       <Container>
//         <Content />
//         <Footer>
//           <FooterTab style={styles.footer}>
//             <Button vertical>
//               <Icon name='ios-menu' />
//               <Text>Menu</Text>
//             </Button>
//             <Button vertical>
//               <Icon name='ios-information-circle-outline' />
//               <Text>Description</Text>
//             </Button>
//             <Button badge vertical onPress={this.addLike}>
//             <Badge><Text>{this.state.counter}</Text></Badge>
//               <Icon name='md-heart-outline' />
//               <Text>Loved</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>

//     );
//   }
// }

// const styles = {
//     footer:{
//       backgroundColor: '#ffffff'
//     }
//   }
