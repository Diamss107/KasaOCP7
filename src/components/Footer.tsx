import logoWhite from '../images/logoWhite.png';
import styles from '../style/components/footer.module.scss';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<img
				src={logoWhite}
				alt='Le logo de Kasa'
				className={styles.footer__logo}
			/>
			<span>© 2020 Kasa. All rights reserved</span>
		</footer>
	);
}
