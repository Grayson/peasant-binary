import React from 'react'

interface Props {
	bits: boolean[],
};

function BinaryLine({ bits }: Props): JSX.Element {
	const str = bits.map(b => b ? '1' : '0').join('');
	return (
		<p>0b{ str }</p>
	)
}

export default BinaryLine;