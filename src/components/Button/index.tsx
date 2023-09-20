import { ReactNode, memo } from 'react';
import styles from './index.less';

function Button({ text, onClick, children, type = 'button' }: IButton) {
  const handleClick = () => {
    onClick && onClick();
  };
  const buttonName = children || text;
  return (
    <>
      {type === 'text' ? (
        <span className={styles.text} onClick={onClick}>
          {buttonName}
        </span>
      ) : (
        <button className={styles.wrap} onClick={onClick}>
          {buttonName}
        </button>
      )}
    </>
  );
}
export default memo(Button);
interface IButton {
  onClick?: () => void;
  text?: string;
  type?: 'text' | 'button';
  children?: ReactNode;
}
