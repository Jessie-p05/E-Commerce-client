import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({user:userReducer, cart:cartReducer});


const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})