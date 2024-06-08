import NfcManager, { NfcTech } from 'react-native-nfc-manager';

// Initialize NFC
export async function initNfc(): Promise<void> {
  await NfcManager.start();
}

// Function to read NFC tag
export async function readNfcTag(): Promise<any> {
  try {
    // Request NFC technology
    await NfcManager.requestTechnology(NfcTech.Ndef);
    // Get the NFC tag
    const tag = await NfcManager.getTag();
    console.log(tag);
    await NfcManager.setAlertMessageIOS("NFC tag scanned!");
    // Cancel the NFC technology request
    await NfcManager.cancelTechnologyRequest();
    return tag;
  } catch (ex) {
    console.warn(ex);
    await NfcManager.cancelTechnologyRequest();
    return null;
  }
}
