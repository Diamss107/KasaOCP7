import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppProps } from '../types/globals';
import styles from '../style/components/rating.module.scss';

interface RatingProps extends AppProps {
	stars: number;
	maxStars: number;
}

export function Rating(props: RatingProps) {
	return (
		<div className={styles.rating}>
			{/*
			 La ligne suivante crée un tableau de la longueur de props.maxStars,
			 mais en lui-même, il n'est pas utilisable. Il faut donc le transformer
			 en tableau utilisable grâce au spread operator.
			 */}
			{[...Array(props.maxStars)].map((_, index) => (
				<FontAwesomeIcon
					key={index}
					icon={solid('star')}
					className={
						index < props.stars
							? styles.rating__fulfilledStar
							: styles.rating__emptyStar
					}
				/>
			))}
		</div>
	);
}
