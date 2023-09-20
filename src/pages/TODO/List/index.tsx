import { memo } from 'react';
import Range, { MAX_NUM, MIN_NUM } from '@/components/Range';
import day from 'dayjs';
import styles from './index.less';
import { useLiveQuery } from 'dexie-react-hooks';
import TodoDb from '@/store/todo';
import { TodoStatus } from '@/types/todo';
function List() {
  const list = useLiveQuery(() => TodoDb.queryAll()) || [];

  const formatTime = (time: number) => {
    return day(time).format('YYYY-MM-DD hh:mm:ss');
  };
  const handleAddProcess = (id: number, process: number) => {
    process += 10;
    process = Math.min(MAX_NUM, process);
    process = Math.max(MIN_NUM, process);
    TodoDb.updateProcess(id, { process });
  };
  const handleDelete = (id: number) => {
    TodoDb.deleteItem(id);
  };
  return (
    <div>
      <ul>
        {list.length
          ? list.map((item) => {
              return (
                <li className={styles.item} key={item.id}>
                  <div className={styles.header}>
                    <div className={styles.title}>
                      {item.title}
                      {item.process !== MAX_NUM ? (
                        <i
                          className={styles.plus}
                          onClick={() =>
                            handleAddProcess(item.id, item.process)
                          }
                        >
                          进度+10
                        </i>
                      ) : null}
                    </div>
                    <div
                      className={styles.close}
                      onClick={() => handleDelete(item.id)}
                    >
                      X
                    </div>
                  </div>
                  <div className={styles.process}>
                    <Range value={item.process} />
                  </div>
                  <div className={styles.status}>
                    <div>{item.status}</div>
                    <div>{formatTime(item.createGMT)}</div>
                  </div>
                </li>
              );
            })
          : 'null'}
      </ul>
    </div>
  );
}
export default memo(List);
interface Item {
  value: string;
}
interface IList {
  list: Item[];
}
