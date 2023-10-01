import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'umi';
import { navList } from './constants';
import * as Three from 'three';
import rings from 'vanta/dist/vanta.rings.min.js';
import styles from './index.less';
import AvatarImg from './avatar';
import Loading from '@/components/Loading';

export default function Layout() {
  const location = useLocation();
  const bgAnimationRef = useRef<HTMLDivElement|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState('');
  useLayoutEffect(() => {
    if(bgAnimationRef.current) {
       rings({
      el: bgAnimationRef.current,
      THREE:Three,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.8,
      scaleMobile: 1.0,
    });
  }
  }, [bgAnimationRef,loading]);
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
    <div className={styles.layout} ref={bgAnimationRef}>
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
