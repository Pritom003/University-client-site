import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/Auth.slice";
import { baseApi } from "./api/BaseApi";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer ,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
const persistConfig = {
    key: 'auth',
    storage,
    // whitelist: ['user', 'token'],
  }
  const persistAuthReducer=persistReducer(persistConfig,authReducer)
 export const store =configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth:persistAuthReducer
    },
        middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }).concat(baseApi.middleware)
        
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
console.log("Initial Redux State:", store.getState());
