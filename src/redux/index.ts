import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appReducer from './features/appSlice';
import requestReducer from './features/requestSlice';
import documentationReducer from './features/documentationSlice';
import editorReducer from './features/editorSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import { schemaApi } from './api/schemaApi';

const persistconfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  appState: appReducer,
  requestState: requestReducer,
  documentationState: documentationReducer,
  editorState: editorReducer,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

const persistedreducer = persistReducer(persistconfig, rootReducer);

// Actual store used by the application
export const store = configureStore({
  reducer: persistedreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([schemaApi.middleware]),
});

export const persistor = persistStore(store);

//for testing purpose
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([schemaApi.middleware]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
