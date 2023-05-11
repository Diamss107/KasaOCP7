import styles from '../style/pages/home.module.scss';
import { Banner } from '../components/Banner';
import { LocationCard } from '../components/LocationCard';
import logements from '../data/logements.json';
import DocumentTitle from 'react-document-title';

export function Home() {
	return (
		<DocumentTitle title='Accueil'>
			<div className={styles.home}>
				<Banner backgroundImgClass={styles.home__banner__img}>
					<h1 className={styles.home__banner__title}>
						Chez vous, partout et ailleurs
					</h1>
				</Banner>
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
