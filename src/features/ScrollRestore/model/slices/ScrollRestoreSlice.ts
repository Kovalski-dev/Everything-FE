import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema } from '../types/ScrollRestoreSchema';

const initialState: ScrollRestoreSchema = {
  scroll: {},
};

export const scrollRestoreSlice = createSlice({
  name: 'scrollRestore',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollRestoreActions } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;
