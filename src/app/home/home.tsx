import { Outlet } from 'react-router-dom';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

export default function Home() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout home-container")}>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
