import logoImg from '../images/logo.png';
import styles from '../style/components/header.module.scss';
import { NavLink } from 'react-router-dom';

type HeaderLink = {
	name: string;
	route: string;
	className: string;
};

export function Header() {
	const links: HeaderLink[] = [
		{
			name: 'Accueil',
			route: '/',
			className: styles.header__nav__list__link,
		},
		{
			name: 'A Propos',
			route: '/apropos',
			className: styles.header__nav__list__link,
		},
	];

	for (const link of links) {
		if (window.location.pathname === link.route) {
			link.className = styles.header__nav__list__linkActive;
		} else {
			link.className = styles.header__nav__list__link;
		}
	}

	return (
		<div className={styles.header}>
			<NavLink to={'/'} className={styles.header__logo}>
				<img
					src={logoImg}
					alt='Le logo de Kasa'
					className={styles.header__logo}
				/>
			</NavLink>
			<nav className={styles.header__nav}>
				<ul className={styles.header__nav__list}>
					{links.map((link) => {
						return (
							<li key={link.route} className={link.className}>
								<NavLink to={link.route}>{link.name}</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
