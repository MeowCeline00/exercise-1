import styles from './Orline.module.css';

export default function Orline() {
    return (
        <div className={styles.orContainer}>
            <div className={styles.horizontalLine}></div>
            <span className={styles.orText}>or</span>
            <div className={styles.horizontalLine}></div>
        </div>
    );
}
