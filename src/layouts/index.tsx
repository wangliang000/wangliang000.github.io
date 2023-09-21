import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'umi';
import { navList } from './constants';
import styles from './index.less';
import AvatarImg from './avatar';
import Loading from '@/components/Loading';

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setActiveItem(location.pathname);
  }, [location]);
  if (loading) {
    return <Loading />;
  }
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
