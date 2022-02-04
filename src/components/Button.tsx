import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { button } from '../redux/slice';

interface ButtonProps {
	color?: string;
	fontSize?: string;
	padding?: string;
	borderRadius?: string;
	height?: string;
	cursor?: string;
	valueInput?: string;
	genderManValue?: boolean;
	genderWomanValue?: boolean;
}

const CustomButton = styled.button.attrs((props) => ({
	type: 'button',
}))`
	color: ${(props: ButtonProps) => (props.color ? props.color : null)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
	padding: ${(props) => (props.padding ? props.padding : null)};
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
	height: ${(props) => (props.height ? props.height : null)};
	cursor: ${(props) => (props.cursor ? props.cursor : null)};
`;

const Button: FC<ButtonProps> = (props): React.ReactElement => {
	const dispatch = useDispatch();
	const changeInputValueOfGender = (): void => {
		if (props.genderManValue && props.valueInput !== undefined) {
			dispatch(button(props.valueInput));
		}
		if (props.genderWomanValue && props.valueInput !== undefined) {
			dispatch(button(props.valueInput.slice(0, -1)));
		}
	};
	return (
		<CustomButton
			{...props}
			onClick={() => {
				changeInputValueOfGender();
			}}
		/>
	);
};

export default Button;
