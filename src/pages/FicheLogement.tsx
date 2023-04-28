import styles from '../style/pages/fichelogement.module.scss';
import { useLocation, useNavigate } from 'react-router';
import logements from '../data/logements.json';
import { Logement } from '../types/globals';
import { Carousel } from '../components/Carousel';
import { Avatar } from '../components/Avatar';
import { Tag } from '../components/Tag';
import { Rating } from '../components/Rating';
import { Collapse } from '../components/Collapse';
import { useEffect } from 'react';
//@ts-ignore
import DocumentTitle from 'react-document-title';

export function FicheLogement() {
	const navigate = useNavigate();

	const currentLogementId = useLocation().pathname.split(':')[1];
	let currentLogement: Logement | null = null;

	for (const logement of logements) {
		if (logement.id === currentLogementId) {
			currentLogement = logement;
		}
	}

	useEffect(() => {
		if (currentLogement === null) {
			navigate('/404');
		}
	});

	return (
		<DocumentTitle title={(currentLogement?.title ?? '404') + ' - KASA'}>
			<div className={styles.ficheLogement}>
				<Carousel pictures={currentLogement?.pictures ?? ['']} />
				<div className={styles.ficheLogement__header}>
					<div className={styles.ficheLogement__header__left}>
						<div
							className={styles.ficheLogement__header__left__titleAndLocation}>
							<h1>{currentLogement?.title}</h1>
							<span>{currentLogement?.location}</span>
						</div>
						<div className={styles.ficheLogement__header__left__tags}>
							{currentLogement?.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>
					</div>
					<div className={styles.ficheLogement__header__right}>
						<Avatar
							img={currentLogement?.host.picture ?? ''}
							hostName={currentLogement?.host.name ?? ''}
						/>
						<Rating stars={Number(currentLogement?.rating)} maxStars={5} />
					</div>
				</div>
				<div className={styles.ficheLogement__infos}>
					<Collapse title={'Description'} height='250px'>
						<p>{currentLogement?.description}</p>
					</Collapse>
					<Collapse title={'Équipement'} height='250px'>
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
