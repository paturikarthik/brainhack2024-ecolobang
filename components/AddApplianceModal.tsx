import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import DropdownComponent from './DropdownComponent';

const AddApplianceModal = ({isVisible, onClose}: any) => {
  const [selectedIndex, setIndex] = React.useState(0);

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Pair a new appliance</Text>
          <Text style={{marginBottom: 10}}>Name</Text>
          <TextInput placeholder="Name" style={styles.input} />
          <Text style={{marginTop: 20}}>Track</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text>Water</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={selectedIndex === 1}
              onPress={() => setIndex(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text>Electricity</Text>
          </View>
          <Text>Appliance Type</Text>
          <DropdownComponent />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Submit</Text>
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
