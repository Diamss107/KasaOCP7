import styles from '../style/components/carousel.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { AppProps } from '../types/globals';

interface CarouselProps extends AppProps {
	images: string[];
}

export function Carousel(props: CarouselProps) {
	const [currentImage, _setCurrentImage] = useState(0);

	function setCurrentImage(index: number) {
		if (index < 0) {
			index = props.images.length - 1;
		} else if (index >= props.images.length) {
			index = 0;
		}

		_setCurrentImage(index);
	}

	let hasMultipleImages = props.images.length > 1;

	return (
		<div className={styles.carrousel}>
			<img
				src={props.images[currentImage]}
				alt='Logement'
				className={styles.carrousel__img}
			/>
			{hasMultipleImages && (
				<>
					<FontAwesomeIcon
						icon={solid('chevron-left')}
						className={
							styles.carrousel__arrow + ' ' + styles.carrousel__arrowLeft
						}
						onClick={() => setCurrentImage(currentImage - 1)}
					/>
					<span className={styles.carrousel__currentImgIndex}>
						{currentImage + 1 + '/' + props.images.length}
					</span>
					<FontAwesomeIcon
						icon={solid('chevron-right')}
						className={
							styles.carrousel__arrow + ' ' + styles.carrousel__arrowRight
						}
						onClick={() => setCurrentImage(currentImage + 1)}
					/>
				</>
			)}
		</div>
	);
}
