import styles from '../style/pages/fichelogement.module.scss';
import { useLocation } from 'react-router';
import logements from '../data/logements.json';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Logement } from '../types/globals';

export function FicheLogement() {
	const [currentPicture, _setCurrentPicture] = useState(0);

	const currentLogementId = useLocation().pathname.split(':')[1];
	let currentLogement: Logement | null = null;

	for (const logement of logements) {
		if (logement.id === currentLogementId) {
			currentLogement = logement;
		}
	}

	if (!currentLogement) return <div>Logement introuvable</div>;

	function setCurrentPicture(index: number) {
		if (!currentLogement) throw new Error('Logement introuvable');

		if (index < 0) {
			index = currentLogement.pictures.length - 1;
		} else if (index >= currentLogement.pictures.length) {
			index = 0;
		}

		_setCurrentPicture(index);
	}

	return (
		<div className={styles.ficheLogement}>
			<div className={styles.ficheLogement__carrousel}>
				{currentLogement.pictures.length > 1 && (
					<FontAwesomeIcon
						icon={solid('chevron-left')}
						className={
							styles.ficheLogement__carrousel__arrow +
							' ' +
							styles.ficheLogement__carrousel__arrowLeft
						}
						onClick={() => setCurrentPicture(currentPicture - 1)}
					/>
				)}
				<img
					src={currentLogement.pictures[currentPicture]}
					alt='Logement'
					className={styles.ficheLogement__carrousel__img}
				/>
				<span className={styles.ficheLogement__carrousel__currentImg}>
					{currentPicture + 1 + '/' + currentLogement.pictures.length}
				</span>
				{currentLogement.pictures.length > 1 && (
					<FontAwesomeIcon
						icon={solid('chevron-right')}
						className={
							styles.ficheLogement__carrousel__arrow +
							' ' +
							styles.ficheLogement__carrousel__arrowRight
						}
						onClick={() => setCurrentPicture(currentPicture + 1)}
					/>
				)}
			</div>
		</div>
	);
}
