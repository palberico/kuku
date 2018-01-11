import React, { Component } from 'react'
import { View, Text } from 'react-native';
// import Description from './Description';
import ImageSlider from 'react-native-image-slider';

 
class Description extends Component {
  constructor(props) {
      super(props);

      this.state = {
          position: 1,
          interval: null
      };
  }

  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  render() {
      return (
          <View style={styles.container}>
              <ImageSlider
                  images={[
                      `http://placeimg.com/640/480/any`,
                      `http://placeimg.com/640/480/any`,
                      `http://placeimg.com/640/480/any`,
                  ]}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}/>
          </View>
      );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
 

// const Description = () => (
//   <Text>
//     Description
//   </Text>
// );

export default Description;

