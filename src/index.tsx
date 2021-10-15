import React from 'react';
import { render } from 'react-dom';
import BinaryView from './BinaryView';

interface BinaryCalculationChain {
	isOne: boolean,
	value: number,
	next: BinaryCalculationChain | null,
};

function calculateNextValue(input: number): BinaryCalculationChain | null {
	if (!input) {
		return null;
	}
	const isOne = input % 2 === 1;
	return {
		isOne,
		next: calculateNextValue((input - (isOne as unknown as number)) / 2),
		value: input,
	}
}

function collect(chain: BinaryCalculationChain): { value: number, isOne: boolean }[] {
	const collection = []
	let current = chain;
	while (current) {
		collection.push(current);
		current = current.next;
	}
	return collection;
}

function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
	const input = parseInt(event.target.value);
	const calculation = calculateNextValue(input);
	const collection = collect(calculation);
	update({ ...appState, binary: collection });
	console.log(collection);
}

interface ApplicationState {
	binary: { value: number, isOne: boolean }[],
};

let appState: ApplicationState = {
	binary: [],
};

function Application({ binary }: ApplicationState): JSX.Element {
	return <>
		<h1>Peasant Binary</h1>
		<input type="text" onChange={onInputChange} />
		<BinaryView binary={ binary } />
	</>;
}

function update({ binary }: ApplicationState) {
	render(<Application binary={binary} />, document.getElementById('app'));
}

update(appState);