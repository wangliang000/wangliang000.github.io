import styles from './index.less';
export default function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.ball}>L</div>
      <div className={styles.ball}>o</div>
      <div className={styles.ball}>a</div>
      <div className={styles.ball}>d</div>
      <div className={styles.ball}>i</div>
      <div className={styles.ball}>n</div>
      <div className={styles.ball}>g</div>
    </div>
  );
}
