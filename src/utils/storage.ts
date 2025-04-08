import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: string, value: any): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

export async function removeData(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}

export async function getData(key: string): Promise<any | null> {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value == null) {
      return null
    }

    return JSON.parse(value);
  } catch (error) {
    console.error(error);

    return null
  }
}
