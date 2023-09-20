import styles from './index.less';
export default function HomePage() {
  return (
    <div className={styles.wrap}>
      <section className={styles.quotations}>
        <h4>警示自己</h4>
        <p>
          我们应该将复杂的问题分解成简单的部分，然后逐一解决。 -- 约翰·冯·诺依曼{' '}
        </p>
        <p>身体虚弱，它将永远不会培养有活力的灵魂和智慧。 -- 卢棱</p>
      </section>
    </div>
  );
}
