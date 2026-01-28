import styles from './page.module.css';
import LayoutComp from '../components/LayoutComp';
export default function Home() {
  return (
    <LayoutComp>
      <div className={styles.page}>我是首页</div>
    </LayoutComp>
  );
}
