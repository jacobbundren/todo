import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
    constructor() {
        this.items = ['Finish Laundry', 'Pick Up Groceries', 'Walk Dog', 'Mow Lawn'];
        this.addToStorage(JSON.stringify(this.items));
    }

    async readFromStorage() {
        try {
            const val = await AsyncStorage.getItem('@todo_item');
            if (val !== null) {
                return val;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async addToStorage(val) {
        try {
            await AsyncStorage.setItem('@todo_item', val)
        } catch (err) {
            console.log(err);
        }
    }
}

export default StorageService;