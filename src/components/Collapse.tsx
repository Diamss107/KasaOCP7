import styles from '../style/components/collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useState } from 'react';
import { AppProps } from '../types/globals';

interface DropdownProps extends AppProps {
	title: string;
}

export function Collapse(props: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	let collapseClass = '';

	if (isOpen) {
		collapseClass = styles.collapseOpen;
	}

	// let style: React.CSSProperties = { height: props.height || 'auto' };

	return (
		<div className={styles.collapse + ' ' + collapseClass}>
			<div
				className={styles.collapse__header}
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<h2>{props.title}</h2>
				<FontAwesomeIcon
					icon={solid('chevron-down')}
					className={styles.collapse__header__icon}
				/>
			</div>
			<div className={styles.collapse__desc}>{props.children}</div>
		</div>
	);
}
