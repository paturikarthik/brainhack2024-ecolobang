import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import { Avatar, Icon} from 'react-native-elements';
import { initNfc, readNfcTag } from '../NFC/NFCManagerSetup';
import AddApplianceModal from '../components/AddApplianceModal';

const NfcScreen: React.FC = () => {
  const [nfcTag, setNfcTag] = useState<any | null>(null);
  const [trackedItems, setTrackedItems] = useState([
    { id: '1', name: 'Washing Machine', category: 'Water', time: '00:15:14' },
    { id: '2', name: 'Light Bulb', category: 'Electricity', time: '05:12:54' },
  ]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  useEffect(() => {
    initNfc();
  }, []);

  const handleReadNfc = async () => {
    const tag = await readNfcTag();
    if (tag) {
      setNfcTag(tag);
      Alert.alert('NFC Tag', JSON.stringify(tag));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
      </View>
      <Text style={styles.itemTime}>{item.time}</Text>
    </View>
  );

  const handleAddItem = () => {
    setIsAddModalVisible(true)
  };

  const handleEditItem = () => {
  
  };

  const handleCloseAddModal = () => {
    setIsAddModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <TouchableOpacity style={styles.editButton} onPress={handleEditItem}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        {/* <Text style={styles.editText}>Edit</Text> */}
        <Text style={styles.headerText}>Tracking</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={trackedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.footerText}>
        Scan any saved NFC Tags to start/stop tracking your usage
      </Text>
      <View style={styles.footerIcons}>
        {/* <Icon name="home" size={28} color="black" />
        <Icon name="bar-chart" size={28} color="black" />
        <Icon name="star" size={28} color="black" />
        <Icon name="group" size={28} color="black" /> */}
        {/* <Avatar
          rounded
          source={{ uri: 'https://placekitten.com/50/50' }} // Replace with your image URL or import your image locally
          size="small"
        /> */}
      </View>
      <AddApplianceModal isVisible={isAddModalVisible} onClose={handleCloseAddModal} />
    </View>
  );
};



const styles = StyleSheet.create({
  icon: {
    width: 16,  // Adjust the width to make the icon smaller
    height: 16, // Adjust the height to make the icon smaller
  },

  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    fontFamily: 'JosefinSans-Medium',
  },
  header: {
    flexDirection: 'row',
    fontFamily: 'JosefinSans-Medium',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  editText: {
    fontSize: 16,
    fontFamily: 'JosefinSans-Medium',
    color: '#000',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'JosefinSans-Medium',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    fontFamily: 'JosefinSans-Medium',

  },
  item: {
    flexDirection: 'row', 
    fontFamily: 'JosefinSans-Medium',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTextContainer: {
    flexDirection: 'column',    
    fontFamily: 'JosefinSans-Medium',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold', 
    fontFamily: 'JosefinSans-Medium',
  },
  itemCategory: {
    fontSize: 14,
    color: '#888', 
    fontFamily: 'JosefinSans-Medium',
  },
  itemTime: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'JosefinSans-Medium',

  },
  footerText: {
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
    color: '#888',
    fontFamily: 'JosefinSans-Medium',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    fontFamily: 'JosefinSans-Medium',
  },
  addButton: {
    backgroundColor: '#E8F5E9', // Button background color
    width: 40, // Button width
    height: 40, // Button height
    borderRadius: 20, // Make it round
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  addButtonText: {
    color: '#000', // Text color
    fontSize: 24, // Text size
    fontFamily: 'JosefinSans-Medium',

  },
  editButton: {
    backgroundColor: '#E8F5E9', // Button background color
    padding: 10, // Padding inside the button
    borderRadius: 5, // Rounded corners
  },
  editButtonText: {
    color: '#000', // Text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Text weight
    fontFamily: 'JosefinSans-Medium',
  },
});

export default NfcScreen;
