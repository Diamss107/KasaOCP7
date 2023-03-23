import styles from '../style/locationcard.module.scss';

export function LocationCard(props: any) {
	return (
		<div className={styles.card}>
			<h2 className={styles.card__name}>{props.children}</h2>
		</div>
	);
}
