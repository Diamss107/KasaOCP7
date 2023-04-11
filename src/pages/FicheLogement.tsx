import styles from '../style/pages/fichelogement.module.scss';
import { useLocation } from 'react-router';
import logements from '../data/logements.json';
import { Logement } from '../types/globals';
import { Carousel } from '../components/Carousel';
import { Avatar } from '../components/Avatar';
import { Tag } from '../components/Tag';
import { Rating } from '../components/Rating';
import { Collapse } from '../components/Collapse';

export function FicheLogement() {
	const currentLogementId = useLocation().pathname.split(':')[1];
	let currentLogement: Logement | null = null;

	for (const logement of logements) {
		if (logement.id === currentLogementId) {
			currentLogement = logement;
		}
	}

	if (!currentLogement) return <div>Logement introuvable</div>;

	return (
		<div className={styles.ficheLogement}>
			<Carousel pictures={currentLogement.pictures} />
			<div className={styles.ficheLogement__header}>
				<div className={styles.ficheLogement__header__TLH}>
					<div className={styles.ficheLogement__header__TLH__titleAndLocation}>
						<h1>{currentLogement.title}</h1>
						<span>{currentLogement.location}</span>
					</div>
					<Avatar
						img={currentLogement.host.picture}
						hostName={currentLogement.host.name}
					/>
				</div>
				<div className={styles.ficheLogement__header__tagAndStars}>
					<div className={styles.ficheLogement__header__tagAndStars__tags}>
						{currentLogement.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
					<Rating stars={Number(currentLogement.rating)} maxStars={5} />
				</div>
				<div className={styles.ficheLogement__infos}>
					<Collapse title={'Description'}>
						{currentLogement.description}
					</Collapse>
					<Collapse title={'Equipements'}>
						{currentLogement.equipments.map((equipment) => (
							<>
								<span key={equipment}>{equipment}</span>
								<br />
							</>
						))}
					</Collapse>
				</div>
			</div>
		</div>
	);
}
