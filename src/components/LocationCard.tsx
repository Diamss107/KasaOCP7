import styles from '../style/components/locationcard.module.scss';
import { AppProps, Logement } from '../types/globals';
import { NavLink } from 'react-router-dom';

interface LocationCardProps extends AppProps {
	logement: Logement;
}

export function LocationCard(props: LocationCardProps) {
	return (
		<NavLink
			to={`/fichelogement/:${props.logement.id}`}
			className={styles.card}>
			<img
				width={340}
				height={340}
				src={props.logement.cover}
				alt='Vue du logement'
				className={styles.card__img}
			/>
			<h2 className={styles.card__name}>{props.children}</h2>
		</NavLink>
	);
}
