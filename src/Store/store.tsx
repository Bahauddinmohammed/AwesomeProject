import { configureStore } from '@reduxjs/toolkit';
import { hostApiServices } from '../APIServices/hostApiServices';

export const store = configureStore({
  reducer: {
    [hostApiServices.reducerPath]: hostApiServices.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hostApiServices.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
