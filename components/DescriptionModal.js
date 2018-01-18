import React from 'react'
import Modal from 'react-native-modalbox';
import { Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  Button,
  Icon,
} from 'native-base'

const DescriptionModal = (props) => (
  <Modal isOpen={props.modalState} position={'center'} style={styles.modal}>
    <Text style={styles.descripText}>
      {props.item.description}
    </Text>
    <Grid>
      <Row>
        <Col>
          {/* TODO */}
          {/* Need to implement Redux for managing Modal State */}
          {/* Modal as it stands now requires double click on second open */}
          <Button iconLeft transparent style={styles.btnModal}>
            <Icon
              style={styles.btnIcon}
              name='ios-close-circle-outline'
            />
            <Text style={styles.btnText}>NOPE</Text>
          </Button>
        </Col>
        <Col>
          <Button iconLeft transparent style={styles.btnModal} onPress={console.log('like')}>
            <Icon
              style={styles.btnIcon}
              name='ios-heart-outline'
            />
            <Text style={styles.btnText}>LOVE</Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  </Modal>
)

const styles = {
  modal: {
    height: 300,
    width: 300,
    borderRadius: 10
  },
  descripText:{
    marginLeft: 20,
    marginTop: 35,
    marginRight: 20
  },
  btnModal:{
    top: 100,
    left: 25,
    width: 100
  },
  btnText:{
    marginLeft: 10,
    marginRight: 50,
    color: 'red'
  },
  btnIcon:{
    color: 'red'
  },
}




export default DescriptionModal
