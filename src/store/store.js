import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import todoReducer from "./reducers/todoSlice";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

// const rootReducer = combineReducers({
//   todos: todoReducer
// })

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
  devTools: true,
  middleware: [thunk],
});

export default store;

export const persistor = persistStore(store);
