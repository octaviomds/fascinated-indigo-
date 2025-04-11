import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { useState } from 'react';
import styles from './contact.module.css';
import createClassTransformer from '../../style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function Contact() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('Numero portable : 07 78 65 45 34  COURRIEL : ECO.RIDE@GMAIL.COM  ADRESSE SOCIALE : ECORIDE RUE DE LAMBERT 75234 PARIS .TEL:0123456789');

  return (
    <>
      <div className={classes("row-layout contact-container")}>
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
        <img src="/src/assets/IMG_8688.jpg" className={classes("image")} />
        <IgrTextarea label="CONTACT" outlined="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("textarea")}></IgrTextarea>
      </div>
    </>
  );
}
