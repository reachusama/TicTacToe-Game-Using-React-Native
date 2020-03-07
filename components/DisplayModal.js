import React from 'react'
import { Modal, View, Text, StyleSheet } from 'react-native';

const DisplayModal = (props) => (
  <Modal visible={ props.display } animationType = "slide" 
         onRequestClose={ () => console.log('closed') }>>
    <View>
      <Text style = { styles.text }>
        { props.message }
      </Text>
    </View>
    
  </Modal>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 150
  }
})

export default DisplayModal;