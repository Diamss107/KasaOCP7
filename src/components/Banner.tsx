import styles from '../style/components/banner.module.scss';
import { AppProps } from '../types/globals';

interface BannerProps extends AppProps {
	backgroundImgClass: string;
}

export function Banner(props: BannerProps) {
	return (
		<div className={styles.banner + ' ' + props.backgroundImgClass}>
			<div className={styles.banner__background}>
				{props.children && (
					<div className={styles.banner__background__title}>
						{props.children}
					</div>
				)}
			</div>
		</div>
	);
}
