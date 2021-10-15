import React from 'react';

interface BitProps {
	isOne: boolean,
	value: number,
}

function BitView({ isOne, value }: BitProps): JSX.Element {
	return <>
		<dt>{value}</dt>
		<dd>{ isOne ? '1' : '0' }</dd>
	</>;
}

interface Props {
	binary: { value: number, isOne: boolean }[],
};

function BinaryView({ binary }: Props): JSX.Element {
	const bits = binary.map( ({value, isOne}, key) =>
		<BitView isOne={isOne} value={value} key={key} />);
	return <dl className="binary-view">
		{ bits }
	</dl>;
};

export default BinaryView;