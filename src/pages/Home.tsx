import styles from '../style/pages/home.module.scss';
import { Banner } from '../components/Banner';
import { LocationCard } from '../components/LocationCard';
import logements from '../data/logements.json';
//@ts-ignore
import DocumentTitle from 'react-document-title';

export function Home() {
	return (
		<DocumentTitle title='Accueil - KASA'>
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
		</DocumentTitle>
	);
}
