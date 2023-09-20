import { useMemo } from 'react';
import styles from './index.less';
export const MAX_NUM = 100;
export const MIN_NUM = 0;
export default function Range({ value }: { value: number }) {
  const [innerStyle, percent] = useMemo(() => {
    let v = value;
    v = Math.min(v, MAX_NUM);
    v = Math.max(v, MIN_NUM);
    const percent = v + '%';
    return [{ width: percent }, percent];
  }, [value]);
  return (
    <div className={styles.wrap}>
      <div className={styles.outer}>
        <div className={styles.inner} style={innerStyle}></div>
      </div>
      <div className={styles.process}>{percent}</div>
    </div>
  );
}
