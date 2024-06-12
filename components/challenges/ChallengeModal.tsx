import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Alert,
  Image,
} from 'react-native';
import TreePlanting from '../../assets/Challenges/TreePlanting.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChallengeModal: React.FC<{
  modalVisible: boolean;
  offModal: Function;
  challengeName: string;
  challengeTimeline: string;
  challengeDesc: string;
  challengeReward: string;
  challengeImage: any;
}> = ({
  modalVisible,
  offModal,
  challengeName,
  challengeTimeline,
  challengeDesc,
  challengeReward,
  challengeImage,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        offModal();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable onPress={() => offModal()} style={{flexDirection: 'row'}}>
            <AntDesign name="back" size={20} color="grey" />
            <Text style={styles.backText}>Challenges</Text>
          </Pressable>
          <Image source={challengeImage} style={styles.challengeImage} />
          <Text style={styles.challengeTitle}>{challengeName}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => offModal()}>
            <Text style={styles.textStyle}>Join Challenge</Text>
          </Pressable>
          <View style={styles.challengeContent}>
            <FontAwesome name="timeline" size={15} color="black" />
            <Text style={styles.modalText}>{challengeTimeline}</Text>
          </View>
          <View style={styles.challengeContent}>
            <MaterialIcons name="electric-bolt" size={15} color="black" />
            <Text style={styles.modalText}>{challengeDesc}</Text>
          </View>
          <View style={styles.challengeContent}>
            <FontAwesome name="money-bill" size={15} color="black" />
            <Text style={styles.modalText}>{challengeReward}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '50%',
    alignSelf: 'center',
    margin: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    maxWidth: '50%',
  },
  challengeImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 8,
  },
  backText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'left',
    marginBottom: 15,
  },
  challengeContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 12,
  },
  challengeTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default ChallengeModal;
