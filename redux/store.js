import { configureStore } from '@reduxjs/toolkit';
import pcBuilderSlice from './features/PcBuilder/PcBuilder';

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(),
});
