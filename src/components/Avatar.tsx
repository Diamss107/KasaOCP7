import styles from '../style/components/avatar.module.scss';
import { AppProps } from '../types/globals';

interface AvatarProps extends AppProps {
	img: string;
	hostName: string;
}

export function Avatar(props: AvatarProps) {
	return (
		<div className={styles.avatar}>
			<div className={styles.avatar__name}>{props.hostName}</div>
			<img
				width={64}
				height={64}
				src={props.img}
				alt={'Photo de profil de ' + props.hostName}
				className={styles.avatar__img}
			/>
		</div>
	);
}
