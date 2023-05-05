import { Footer } from './Footer';
import { Header } from './Header';
import { AppProps } from '../types/globals';
import styles from '../style/components/layout.module.scss';

export function Layout({ children }: AppProps) {
	return (
		<>
			<div className={styles.layout__page}>
				<Header />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
