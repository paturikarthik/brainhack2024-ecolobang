import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { initNfc, readNfcTag } from '../NFC/NFCManagerSetup';

const NfcScreen: React.FC = () => {
  const [nfcTag, setNfcTag] = useState<any | null>(null);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFC Demo Screen</Text>
      <Button title="Scan NFC" onPress={handleReadNfc} />
      {nfcTag && (
        <View style={styles.tagContainer}>
          <Text style={styles.tagTitle}>NFC Tag Data:</Text>
          <Text>{JSON.stringify(nfcTag)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  tagContainer: {
    marginTop: 20,
  },
  tagTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NfcScreen;
