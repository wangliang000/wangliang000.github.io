import Input from '@/components/Input';
import { useCallback, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import List from './List';
import TodoDb from '../../store/todo';
import styles from './index.less';
import Button from '@/components/Button';

export default function TODOList() {
  const [todo, setTodo] = useState('');
  const handleSetTodo = useCallback((value: string) => {
    setTodo(value);
  }, []);
  const handleSubmit = () => {
    if (todo) {
      TodoDb.add({
        title: todo,
        process: 0,
        status: 'pending',
      });
      setTodo('');
    }
  };
  return (
    <section className={styles.todo}>
      <div>
        <Input value={todo} onChange={handleSetTodo} />
        <Button onClick={handleSubmit} text="提交" />
      </div>
      <div className={styles.filterBar}>
        <Button type="text">时间</Button>
        <Button type="text">分类</Button>
        <Button type="text">完成</Button>
      </div>
      <List />
    </section>
  );
}
