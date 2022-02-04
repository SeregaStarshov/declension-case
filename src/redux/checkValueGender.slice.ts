import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateCheckGender {
	pharyngeal: string[];
	vowel: string[];
	man: boolean;
	woman: boolean;
}

const initialStateCheckGender: InitialStateCheckGender = {
	pharyngeal: ['б', 'в', 'г', 'д', 'ж', 'з', 'п', 'ф', 'к', 'т', 'ш', 'с', 'й', 'л', 'м', 'н', 'р', 'х', 'ц', 'ч', 'щ'],
	vowel: ['а', 'у', 'о', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'],
	man: false,
	woman: false,
};

const checkInputValueGender = createSlice({
	name: 'checkInputValueGender',
	initialState: initialStateCheckGender,
	reducers: {
		genderMan: (state, action: PayloadAction<boolean>) => {
			state.man = action.payload;
		},
		genderWoman: (state, action: PayloadAction<boolean>) => {
			state.woman = action.payload;
		},
	},
});

export const { genderMan, genderWoman } = checkInputValueGender.actions;

export default checkInputValueGender.reducer;
