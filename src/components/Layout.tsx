import { Footer } from './Footer';
import { Header } from './Header';
import { AppProps } from '../types/globals';
import styles from '../style/components/page.module.scss';

export function Layout({ children }: AppProps) {
	return (
		<>
			<div className={styles.page}>
				<Header />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
