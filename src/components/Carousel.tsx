import styles from '../style/components/carousel.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { AppProps } from '../types/globals';

interface CarouselProps extends AppProps {
	pictures: string[];
}

export function Carousel(props: CarouselProps) {
	const [currentPicture, _setCurrentPicture] = useState(0);

	function setCurrentPicture(index: number) {
		if (index < 0) {
			index = props.pictures.length - 1;
		} else if (index >= props.pictures.length) {
			index = 0;
		}

		_setCurrentPicture(index);
	}

	let hasMultiplePictures = props.pictures.length > 1;

	return (
		<div className={styles.carrousel}>
			{hasMultiplePictures && (
				<FontAwesomeIcon
					icon={solid('chevron-left')}
					className={
						styles.carrousel__arrow + ' ' + styles.carrousel__arrowLeft
					}
					onClick={() => setCurrentPicture(currentPicture - 1)}
				/>
			)}
			<img
				src={props.pictures[currentPicture]}
				alt='Logement'
				className={styles.carrousel__img}
			/>
			{hasMultiplePictures && (
				<span className={styles.carrousel__currentImg}>
					{currentPicture + 1 + '/' + props.pictures.length}
				</span>
			)}
			{hasMultiplePictures && (
				<FontAwesomeIcon
					icon={solid('chevron-right')}
					className={
						styles.carrousel__arrow + ' ' + styles.carrousel__arrowRight
					}
					onClick={() => setCurrentPicture(currentPicture + 1)}
				/>
			)}
		</div>
	);
}
