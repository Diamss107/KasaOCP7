import styles from "../style/home.module.scss"
import { HomeBanner } from '../components/HomeBanner';
import { LocationCard } from '../components/LocationCard';
import logements from '../data/logements.json';

export function Home() {
	return (
		<div className={styles.home}>
			<HomeBanner>Chez vous, partout et ailleurs</HomeBanner>
			<div className={styles.home__locationCards}>
				{
					logements.map((logement) => {
						return <LocationCard key={logement.id} logement={logement}>{logement.title}</LocationCard>
					})
				}
			</div>
		</div>
	);
}
