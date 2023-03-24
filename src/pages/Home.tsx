import styles from '../style/pages/home.module.scss';
import { Banner } from '../components/Banner';
import { LocationCard } from '../components/LocationCard';
import logements from '../data/logements.json';

export function Home() {
	return (
		<div className={styles.home}>
			<Banner page='home'>Chez vous, partout et ailleurs</Banner>
			<div className={styles.home__locationCards}>
				{logements.map((logement) => {
					return (
						<LocationCard key={logement.id} logement={logement}>
							{logement.title}
						</LocationCard>
					);
				})}
			</div>
		</div>
	);
}
