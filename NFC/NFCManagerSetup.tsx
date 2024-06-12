import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

export async function initNfc(): Promise<void> {

}

export async function readNfcTag(): Promise<any> {
  try {
    // Request NFC technology
    await NfcManager.requestTechnology(NfcTech.Ndef);
    // Get the NFC tag
    const tag = await NfcManager.getTag();
    console.log(tag);
    await NfcManager.setAlertMessage("NFC tag scanned!");
    // Cancel the NFC technology request
    await NfcManager.cancelTechnologyRequest();
    return tag;
  } catch (ex) {
    console.warn(ex);
    await NfcManager.cancelTechnologyRequest();
    return null;
  }
}

