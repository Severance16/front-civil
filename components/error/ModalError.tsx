import useAuth from '@/hooks/useAuth'
import React from 'react'
import { Modal, Text, View } from 'react-native'

interface ModalErrorProps {
    modalVisible: boolean
}
export default function ModalError() {
    const {modalError} = useAuth()
  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
  )
}
