import styles from '../style/components/locationcard.module.scss';
import { AppProps, Logement } from '../types/globals';

interface LocationCardProps extends AppProps {
	logement: Logement;
}

export function LocationCard(props: LocationCardProps) {
	return (
		<div className={styles.card}>
			<img
				src={props.logement.cover}
				alt='Logement'
				className={styles.card__img}
			/>
			<h2 className={styles.card__name}>{props.children}</h2>
		</div>
	);
}
