import styles from "../style/home.module.scss"
import { HomeBanner } from '../components/HomeBanner';
import { LocationCard } from '../components/LocationCard';

export function Home() {
	console.log(styles);
	return (
		<div className={styles.home}>
			<HomeBanner>Chez vous, partout et ailleurs</HomeBanner>
			<div className={styles.home__locationCards}>
				<LocationCard>Titre de la location</LocationCard>
			</div>
		</div>
	);
}
