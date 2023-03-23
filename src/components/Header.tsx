import logoImg from '../images/logo.png'
import styles from '../style/header.module.scss';

export function Header() {
	return (
		<div className={styles.header}>
			<img
				src={logoImg}
				alt='Le logo de Kasa'
				className={styles.header__logo}
			/>
			<nav className={styles.header__nav}>
				<ul className={styles.header__nav__list}>
					<li className={styles.header__nav__list__link}>Accueil</li>
					<li className={styles.header__nav__list__link}>A Propos</li>
				</ul>
			</nav>
		</div>
	);
}
