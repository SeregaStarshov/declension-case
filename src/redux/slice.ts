import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface Select {
	[key: string]: string;
}

interface InitialState {
	value: string;
	newValue: string;
	select: Select;
}

const initialState: InitialState = {
	value: '',
	newValue: '',
	select: {
		'1': '',
		'2': 'а',
		'3': 'у',
		'4': 'а',
		'5': 'ом',
		'6': 'е',
		checkedValueSelect: '',
	},
};

const caseDeclensionSlice = createSlice({
	name: 'caseDeclension',
	initialState,
	reducers: {
		input: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
		select: (state, action) => {
			if (state.select[action.payload] !== undefined) {
				state.select.checkedValueSelect = state.select[action.payload];
			}
		},
		button: (state, action: PayloadAction<string>) => {
			state.newValue = action.payload + state.select.checkedValueSelect;
		},
	},
});

export const { input, button, select } = caseDeclensionSlice.actions;

export default caseDeclensionSlice.reducer;
