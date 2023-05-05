import styles from '../style/components/banner.module.scss';
import { AppProps } from '../types/globals';

interface BannerProps extends AppProps {
	// backgroundImgClass?: string;
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
			{props.children && (
				<span className={styles.banner__title}>{props.children}</span>
			)}
		</div>
	);
}
