import styles from '../style/components/tag.module.scss';
import { AppProps } from '../types/globals';

export function Tag(props: AppProps) {
	return (
		<div className={styles.tag}>
			<span className={styles.tag__text}>{props.children}</span>
		</div>
	);
}
