import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authSlice';

const persistConfig = {
  key: 'refresh-user-token',
  storage,
  whitelisr: ['refreshToken'],
};

export const store = configureStore({
  auth: persistReducer(persistConfig, authSlice.reducer),
});

export const persistor = persistStore(store);
