import stylesDefault from '../style/components/collapse.module.scss';
import stylesSecondary from '../style/components/collapseSecondary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useState } from 'react';
import { AppProps } from '../types/globals';

interface DropdownProps extends AppProps {
	title: string;
	profile?: 'default' | 'secondary';
}

export function Collapse(props: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [descId] = useState(
		'desc' + props.title + Math.floor(Math.random() * 1000)
	);

	const profile = props.profile || 'default';

	let isOpenClass = '';
	if (isOpen) {
		isOpenClass = stylesDefault.collapseOpen;
		if (profile === 'secondary')
			isOpenClass += ' ' + stylesSecondary.collapseOpen;
	}

	let styles: any = {};

	for (const key of Object.keys(stylesDefault)) {
		styles[key] = stylesDefault[key];
		if (profile === 'secondary') styles[key] += ' ' + stylesSecondary[key];
	}

	return (
		<div className={styles.collapse + ' ' + isOpenClass}>
			<h2 className={styles.collapse__header}>
				<button
					aria-expanded={isOpen}
					aria-controls={descId}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className={styles.collapse__header__button}>
					<span className={styles.collapse__header__button__title}>
						{props.title}
						<FontAwesomeIcon
							icon={solid('chevron-down')}
							className={styles.collapse__header__button__title__icon}
						/>
					</span>
				</button>
			</h2>
			<div aria-hidden={!isOpen} className={styles.collapse__desc} id={descId}>
				{props.children}
			</div>
		</div>
	);
}
