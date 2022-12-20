import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import channelsReducer from '../slices/channels';
import messagesReducer from '../slices/messages';

export const store = configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
