import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { select } from '../redux/slice';

interface SelectProps {
	height?: string;
	fontSize?: string;
	borderRadius?: string;
	color?: string;
	backgroundColor?: string;
	selectArray: string[];
}

const CustomSelect = styled.select`
	height: ${(props: SelectProps) => (props.height ? props.height : null)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
	padding: 5px;
`;

const Select: FC<SelectProps> = (props): React.ReactElement => {
	const dispatch = useDispatch();
	const getCurrentOption = (value: number | undefined): void => {
		if (value !== undefined) {
			dispatch(select(value.toString()));
		}
		value = undefined;
	};

	return (
		<CustomSelect {...props} onClick={(event: { target: any }) => getCurrentOption(event.target.value)}>
			{props.selectArray.map((item, index) => (
				<option value={index} key={index}>
					{item}
				</option>
			))}
		</CustomSelect>
	);
};

export default Select;
