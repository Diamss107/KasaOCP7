import styles from '../style/homebanner.module.scss';

export function HomeBanner(props: any) {
	return (
		<div className={styles.banner}>
			<h1 className={styles.banner__title}>{props.children}</h1>
		</div>
	);
}
