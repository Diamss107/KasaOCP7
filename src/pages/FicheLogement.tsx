import styles from '../style/pages/fichelogement.module.scss';
import { useLocation, useNavigate } from 'react-router';
import type { Logement } from '../types/globals';
import logements from '../data/logements.json';
import { Carousel } from '../components/Carousel';
import { Avatar } from '../components/Avatar';
import { Tag } from '../components/Tag';
import { Rating } from '../components/Rating';
import { Collapse } from '../components/Collapse';
import { useEffect } from 'react';
import DocumentTitle from 'react-document-title';

export function FicheLogement() {
	const navigate = useNavigate();

	const currentLogementId = useLocation().pathname.split(':')[1];
	let currentLogement: Logement | null = null;

	currentLogement =
		logements.find((logement: Logement) => logement.id === currentLogementId) ??
		null;

	useEffect(() => {
		if (currentLogement === null) {
			navigate('/404');
		}
	});

	return (
		<DocumentTitle title={currentLogement?.title ?? 'Logement non trouvé'}>
			<div className={styles.ficheLogement}>
				<Carousel images={currentLogement?.pictures ?? ['']} />
				<div className={styles.ficheLogement__header}>
					<div className={styles.ficheLogement__header__titleLocationAndTags}>
						<div
							className={
								styles.ficheLogement__header__titleLocationAndTags__titleAndLocation
							}>
							<h1>{currentLogement?.title}</h1>
							<span>{currentLogement?.location}</span>
						</div>
						<div
							className={
								styles.ficheLogement__header__titleLocationAndTags__tags
							}>
							{currentLogement?.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>
					</div>
					<div className={styles.ficheLogement__header__avatarAndRating}>
						<Avatar
							img={currentLogement?.host.picture ?? ''}
							hostName={currentLogement?.host.name ?? ''}
						/>
						<Rating stars={Number(currentLogement?.rating)} maxStars={5} />
					</div>
				</div>
				<div className={styles.ficheLogement__infos}>
					<Collapse title={'Description'} profile={'secondary'}>
						<p>{currentLogement?.description}</p>
					</Collapse>
					<Collapse title={'Équipement'} profile={'secondary'}>
						{currentLogement?.equipments.map((equipment) => (
							<div key={equipment}>
								<span>{equipment}</span>
							</div>
						))}
					</Collapse>
				</div>
			</div>
		</DocumentTitle>
	);
}
