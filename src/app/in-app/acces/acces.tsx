import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useGetCategories } from '../../hooks/northwind-hooks';
import styles from './acces.module.css';
import createClassTransformer from '../../style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function Acces() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindCategories } = useGetCategories();

  return (
    <>
      <div className={classes("row-layout acces-container")}>
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
        <span className={classes("banner")}>Banner not yet available in React</span>
        <img src="/src/assets/IMG_8691 3.jpg" className={classes("image")} />
        {northwindCategories?.map(() => (
          <p className={classes("typography__caption text")} key={uuid()}>
            <span>TRAJET ALLEZ :

          TRAJET RETOUR:

          CHAUFFEUR DISPONIBLE:</span>
          </p>
        ))}
      </div>
    </>
  );
}
