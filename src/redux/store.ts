import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import caseDeclensionSlice from './slice';
import checkInputValueGender from './checkValueGender.slice';

export const store = configureStore({
	reducer: {
		input: caseDeclensionSlice,
		checkInputValue: checkInputValueGender,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
