import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { input } from '../redux/slice';
import { useDispatch } from 'react-redux';

import { genderMan, genderWoman } from '../redux/checkValueGender.slice';

interface InputProps {
	placeholder: string;
	borderRadius: string;
	padding: string;
	height: string;
	width: string;
	fontSize: string;
	pharyngeal?: string[];
	vowel?: string[];
}

const CustomInput = styled.input.attrs((props) => ({
	type: 'text',
}))`
	border: 1px solid black;
	border-radius: ${(props: InputProps) => (props.borderRadius ? props.borderRadius : null)};
	padding: ${(props) => (props.padding ? props.padding : null)};
	height: ${(props) => (props.height ? props.height : null)};
	width: ${(props) => (props.width ? props.width : null)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
`;

const Input: FC<InputProps> = (props): React.ReactElement => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const getValueInput = (value: string): void => {
		value = value
			.replace(/\s+/gi, '')
			.replace(/[^а-яё]/gi, '')
			.trim();
		setValue(value);
		dispatch(input(value));
		checkInputValueOnGender(value);
	};

	const checkInputValueOnGender = (value: string): void => {
		if (props.pharyngeal !== undefined && props.vowel !== undefined) {
			const a = props.pharyngeal.includes(value.slice(-1), 0);
			dispatch(genderMan(a));
			const b = props.vowel.includes(value.slice(-1), 0);
			dispatch(genderWoman(b));
		}
	};

	return <CustomInput {...props} value={value} onChange={(event) => getValueInput(event.target.value)} />;
};

export default Input;
