import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["data", "savedData", "filteredData"],
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
    reducer: {
        campers: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
