// import React, { Component } from 'react'
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeRouter, Route, Switch, withRouter, Link } from 'react-router-native';
// import {
//   Container, 
//   Header, 
//   Title, 
//   Content,
//   Button,
//   FooterTab, 
//   Left, 
//   Right, 
//   Body, 
//   Icon,
//   Drawer,
//   Footer
// } from 'native-base';

// class myFooter extends Component {
  
//   openDescription = () => {
//     this.props.history.push('/description');
//   };

//   render() {
//     return (
//         <Container style={styles.body}>
//                   <Footer>
//                     <FooterTab style={styles.footer}>
//                       <Button vertical>
//                         <Icon name='ios-menu' />
//                           <Text>Menu</Text>
//                       </Button>

//                       <Button vertical onPress={this.openDescription}>
//                         <Icon name='ios-information-circle-outline' />
//                           <Text>Description</Text>
//                       </Button>
                      
//                       <Button vertical>

//                       {/* <Button badge vertical onPress={this.addLike}>
//                         <Badge><Text>{this.state.counter}</Text></Badge> */}
                        
//                         <Icon name='md-heart-outline' />
//                           <Text>Loved</Text>
//                       </Button>
//                     </FooterTab>
//                   </Footer>
//         </Container>
  
//     );
//   }
// }

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//     body:{
//       backgroundColor: '#ffffff',
//   },
//   footer:{
//     backgroundColor: '#ffffff'
//   },
// };

// export default myFooter;



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
//     import { TabNavigator } from 'react-navigation';

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
