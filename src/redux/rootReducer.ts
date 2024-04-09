import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

// slices
import userReducer from './slices/user'

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "",
  whitelist: ["user"], // 'user' add 'user' in this array to make it persist
};

const rootReducer = combineReducers({
  user: userReducer,
});

export { rootPersistConfig, rootReducer };