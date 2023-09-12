import { Link, Outlet, useLocation } from 'umi';
import { navList } from './constants';
import { useState, useEffect } from 'react';
import styles from './index.less';
export default function Layout() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <nav>
          <ul>
            {navList.map((item) => (
              <li
                key={item.path}
                className={activeItem === item.path ? styles.active : ''}
              >
                <Link to={item.path}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className={styles.content}>
          <Outlet />
        </section>
      </div>
    </div>
  );
}
