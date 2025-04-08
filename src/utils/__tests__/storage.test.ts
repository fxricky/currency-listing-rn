import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, removeData, getData } from '../storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
}));

describe('Storage Utility Functions', () => {
  const mockedAsyncStorage = jest.mocked(AsyncStorage);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('storeData should store data in AsyncStorage', async () => {
    const key = 'testKey';
    const value = { name: 'Alice' };

    await storeData(key, value);

    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  test('removeData should remove data from AsyncStorage', async () => {
    const key = 'testKey';

    await removeData(key);

    expect(mockedAsyncStorage.removeItem).toHaveBeenCalledWith(key);
  });

  test('getData should retrieve data from AsyncStorage', async () => {
    const key = 'testKey';
    const value = { name: 'Alice' };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(value));

    const result = await getData(key);

    expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toEqual(value);
  });

  test('getData should return null if no value is found', async () => {
    const key = 'nonExistentKey';
    mockedAsyncStorage.getItem.mockResolvedValueOnce(null);

    const result = await getData(key);

    expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBeNull();
  });

  test('getData should handle errors gracefully', async () => {
    const key = 'testKey';
    mockedAsyncStorage.getItem.mockImplementationOnce(() => {
      throw new Error('AsyncStorage error');
    });

    const result = await getData(key);

    expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBeNull();
  });
});
