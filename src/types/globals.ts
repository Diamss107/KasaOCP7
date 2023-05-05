import React from 'react';

export declare interface AppProps {
	children?: React.ReactNode; // best, accepts everything React can render
	childrenElement?: JSX.Element; // A single React element
	style?: React.CSSProperties; // to pass through style props
	onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
}

export declare interface Logement {
	id: string;
	title: string;
	cover: string;
	pictures: string[];
	description: string;
	host: {
		name: string;
		picture: string;
	};
	rating: number | string;
	location: string;
	equipments: string[];
	tags: string[];
}
