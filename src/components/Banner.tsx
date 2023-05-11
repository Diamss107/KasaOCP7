import styles from '../style/components/banner.module.scss';
import { AppProps } from '../types/globals';

interface BannerProps extends AppProps {
	backgroundImg: string;
}

export function Banner(props: BannerProps) {
	return (
		<div className={styles.banner}>
			<img
				src={props.backgroundImg}
				alt=''
				aria-hidden='true'
				className={styles.banner__img}
			/>
			<div className={styles.banner__title}>
				{props.children && props.children}
			</div>
		</div>
	);
}
