import { IgrCalendar, IgrCalendarModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import styles from './chauffeur.module.css';
import createClassTransformer from '../../style-utils';

IgrCalendarModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function Chauffeur() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout chauffeur-container")}>
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
        <p className={classes("typography__body-1 text")}></p>
        <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
        <IgrTextarea label="CHAUFFEUR DISPONIBLE :57" outlined="true" className={classes("textarea")}></IgrTextarea>
      </div>
    </>
  );
}
