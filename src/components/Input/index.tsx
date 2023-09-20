import { ReactElement } from 'react';
import styles from './index.less';

export default function Input({
  value,
  onChange,
  placeholder,
}: InputOptions): ReactElement {
  const handleChange = (e: { target: { value: string } }) => {
    onChange && onChange(e.target.value);
  };
  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </>
  );
}

interface InputOptions {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}
