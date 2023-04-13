import styles from '../style/pages/errorPage.module.scss';
import { NavLink } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ErrorPage() {
	return (
		<>
			<Header />
			<div className={styles.error}>
				<div className={styles.error__infos}>
					<h1 className={styles.error__infos__title}>404</h1>
					<p className={styles.error__infos__subtitle}>
						Oups! La page que vous demandez n'existe pas.
					</p>
				</div>
				<NavLink to='/' className={styles.error__link}>
					Retourner sur la page d'accueil
				</NavLink>
			</div>
			<Footer />
		</>
	);
}
