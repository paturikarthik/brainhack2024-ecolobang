import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import NfcManager, {Ndef, NfcTech, TagEvent} from 'react-native-nfc-manager';
import {useState} from 'react';
import {MongoClient} from 'mongodb'

const uri = process.env.MONGODB_URI||''
const mongodb = new MongoClient(uri)


const [name, setName] = useState('hi');
const [trackingOptions, setTrackingOptions] = useState('water');
const [applianceType, setApplianceType] = useState('washingmachine');
const AddApplianceModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const onAddItems = async (payloadData: {
    name: string;
    trackingOptions: string;
    applianceType: string;
  }) => {
    setName(name)
    setTrackingOptions(trackingOptions)
    setApplianceType(applianceType)
    const usage = 10;
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const update = await mongodb.db('brainhack').collection('devices').insertOne({
        name:name,
        trackingOptions:trackingOptions,
        applianceType:applianceType,
        usage:usage
      })
      const bytes = Ndef.encodeMessage([
        Ndef.textRecord(payloadData.name),
        Ndef.textRecord(payloadData.trackingOptions),
        Ndef.textRecord(payloadData.applianceType),
        Ndef.textRecord(update.insertedId.toString())
      ]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
      }

      Alert.alert('Success', 'Item added successfully')
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <Modal visible={isVisible}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add Item</Text>
          <Text style={styles.message}>Your custom content goes here</Text>
          <View style={styles.buttonContainer}>
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#aaa',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddApplianceModal;
