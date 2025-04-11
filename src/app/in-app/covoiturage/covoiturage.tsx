import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { useState } from 'react';
import styles from './covoiturage.module.css';
import createClassTransformer from '../../style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function Covoiturage() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [radioGroupVisible, setRadioGroupVisible] = useState<boolean | undefined>(false);
  const [value, setValue] = useState<string | undefined>('1');
  const [value1, setValue1] = useState<string | undefined>('TOUS LES TRAJETS');

  return (
    <>
      <div className={classes("row-layout covoiturage-container")}>
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
        {radioGroupVisible && (
          <IgrRadioGroup alignment="horizontal" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="c6556ef7-16a8-48a4-b90e-0f07fa8eb8f8" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="e65b1a79-1a65-4973-9176-dbe971694393" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="205b4629-81f1-4ccd-8c55-d31c348bbc12" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
        )}
        <img src="/src/assets/IMG_8691 3.jpg" className={classes("image")} />
        <IgrTextarea label="PLACE DE COVOITURAGE DISPONIBLE: 45" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("textarea")}></IgrTextarea>
      </div>
    </>
  );
}
