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
	// TODO Commentaire à enlever
	// La génération de l'id unique suivant est réalisé grâce à l'ajout de props.tile à un chiffre aléatoire
	// Cela permet d'avoir un id unique pour chaque collapse
	const [descId] = useState(
		'desc' + props.title + Math.floor(Math.random() * 1000)
	);

	let isOpenClass = '';
	if (isOpen) {
		isOpenClass = styles.collapseOpen;
	}

	return (
		<div className={styles.collapse + ' ' + isOpenClass}>
			<button
				aria-expanded={isOpen}
				aria-controls={descId}
				className={styles.collapse__header}
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<h2>{props.title}</h2>
				<FontAwesomeIcon
					icon={solid('chevron-down')}
					className={styles.collapse__header__icon}
				/>
			</button>
			<div aria-hidden={!isOpen} className={styles.collapse__desc} id={descId}>
				{props.children}
			</div>
		</div>
	);
}
