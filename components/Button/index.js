import styles from './Button.module.css'

export default function Button({ text, onClick, logo, className, ...props }) {
  return (
    <button className={`${styles.button} ${className || ''}`} onClick={onClick} {...props}>
      {logo && <img src={logo} alt="Logo" className={styles.logo} />}
      {text}
    </button>
  );
}

