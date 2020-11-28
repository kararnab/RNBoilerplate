import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "./constants";

export class StorageUtil {
    static getUser = async () => {
        let user = await StorageUtil.getItemFromAsyncStorage(StorageKeys.USER)
        return user;
    }

    static setUser = async (user: String) => {
        await AsyncStorage.setItem(StorageKeys.USER, JSON.stringify(user))
    }

    static clearAll = async () => {
        await AsyncStorage.clear()
    }

    /**
     * 
     * @param key Key to search in AsyncStorage
     */
    static getItemFromAsyncStorage: any = async (key: string) => {
        let data
        try {
            data = await AsyncStorage.getItem(key)
            if (data) {
                return JSON.parse(data)
            }
        } catch (e) {
        }
        return data
    }
}