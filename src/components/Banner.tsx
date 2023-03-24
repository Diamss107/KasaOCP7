import styles from '../style/banner.module.scss';
import homeStyles from '../style/homebanner.module.scss';
import aproposStyles from '../style/aproposbanner.module.scss';
import { AppProps } from '../types/globals';

interface BannerProps extends AppProps {
	page: 'home' | 'apropos';
}

export function Banner(props: BannerProps) {
	let backgroundImg = homeStyles.banner__img;

	if (props.page === 'home') {
		backgroundImg = homeStyles.banner__img;
	} else if (props.page === 'apropos') {
		backgroundImg = aproposStyles.banner__img;
	}

	return (
		<div className={styles.banner + ' ' + backgroundImg}>
			{props.children && (
				<h1 className={styles.banner__title}>{props.children}</h1>
			)}
		</div>
	);
}
