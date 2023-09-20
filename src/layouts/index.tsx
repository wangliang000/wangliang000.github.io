import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'umi';
import { navList } from './constants';
import styles from './index.less';
import AvatarImg from './avatar';
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
          <div className={styles.intro}>
            <AvatarImg />
            <span className={styles.nickName}>昱旸</span>
          </div>
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
