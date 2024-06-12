import React from 'react';
import { CheckBox } from 'react-native-elements';
import DropdownComponent from './DropdownComponent';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import NfcManager, {Ndef, NfcTech, TagEvent} from 'react-native-nfc-manager';
import {useState} from 'react';
import axios from 'axios';

const AddApplianceModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const [name, setName] = useState('hi');
  const [trackingOptions, setTrackingOptions] = useState('water');
  const [applianceType, setApplianceType] = useState('washing machine');
  
  const [selectedIndex, setIndex] = React.useState(0);

  const onAddItems = async () => {
    setApplianceType(trackingOptions== "electricity" ? "Air Conditioner" : name.toLowerCase()=="shower" ? "Shower" : "Washing Machine");
    console.log(name, trackingOptions, applianceType)
    try {
      Alert.alert("Scan your new NFC Tag!")
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const id = applianceType == "Shower" ? "1" : applianceType == "Washing Machine" ? "2" : applianceType == "Air Conditioner" ? "3" : "1"
      const bytes = Ndef.encodeMessage([
        Ndef.textRecord(name),
        Ndef.textRecord(trackingOptions),
        Ndef.textRecord(applianceType),
        Ndef.textRecord(id)
      ]);
      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
      }

      Alert.alert('Success', 'Item added successfully')
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
      onClose()
    }
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Pair a new appliance</Text>
          <Text style={{marginBottom: 10}}>Name</Text>
          <TextInput placeholder="Name" style={styles.input} onChange={(e) => setName(e.nativeEvent.text)} />
          <Text style={{marginTop: 20}}>Track</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() =>{ setIndex(0), setTrackingOptions("water")}}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text>Water</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={selectedIndex === 1}
              onPress={() => {setIndex(1), setTrackingOptions("electricity")}}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text>Electricity</Text>
          </View>
          <Text>Appliance Type</Text>
          <DropdownComponent />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onAddItems}>
              <Text style={styles.buttonText} >Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: '300',
    paddingLeft: 15,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddApplianceModal;
