import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Input from './components/input';
import Button from './components/Button';
import Select from './components/Select';
import { RootState } from './redux/store';

const CustomWrapper = styled.div`
	height: 100vh;
	width: 100%;
	padding: 30px;
`;

const DivFilter = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	max-width: 45%;
`;

const DivText = styled.div`
	padding: 30px;
	margin: 0 auto;
	max-width: 45%;
	text-align: center;
`;

const App: FC = (): React.ReactElement => {
	const pharyngeal = useSelector((state: RootState) => state.checkInputValue.pharyngeal);
	const vowel = useSelector((state: RootState) => state.checkInputValue.vowel);
	const valueInput = useSelector((state: RootState) => state.input.value);
	const genderManValue = useSelector((state: RootState) => state.checkInputValue.man);
	const genderWomanValue = useSelector((state: RootState) => state.checkInputValue.woman);
	const selectArray: string[] = [
		'Выбор падежа',
		'Именительный',
		'Родительный',
		'Дательный',
		'Винительный',
		'Творительный',
		'Предложный',
	];
	const text = useSelector((state: RootState) => state.input.newValue);

	return (
		<CustomWrapper>
			<DivFilter>
				<Input
					borderRadius='5px'
					padding='5px'
					height='50px'
					width='40%'
					fontSize='18px'
					placeholder='Введите имя существительное'
					pharyngeal={pharyngeal}
					vowel={vowel}
				/>
				<Select height='50px' fontSize='18px' borderRadius='5px' selectArray={selectArray} />
				<Button
					color='black'
					fontSize='18px'
					padding='5px'
					borderRadius='5px'
					height='50px'
					cursor='pointer'
					valueInput={valueInput}
					genderManValue={genderManValue}
					genderWomanValue={genderWomanValue}
				>
					Отправить
				</Button>
			</DivFilter>
			<DivText>
				<strong style={{ fontSize: '18px' }}>{text}</strong>
			</DivText>
		</CustomWrapper>
	);
};

export default App;
