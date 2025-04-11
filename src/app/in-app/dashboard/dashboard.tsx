import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import styles from './dashboard.module.css';
import createClassTransformer from '../../style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>ECORIDE</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <p className={classes("typography__caption text")}>
          <span>EcoRide est la principale plateforme de covoiturage pour les voyageurs de l' environnement et ceux qui recherchent une solution économique pour leur déplacements</span>
        </p>
        <img src="/src/assets/IMG_8688.jpg" className={classes("image")} />
      </div>
    </>
  );
}
