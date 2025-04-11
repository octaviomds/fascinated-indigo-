import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './set-new-password.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function SetNewPassword() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout set-new-password-container")}>
        <div className={classes("row-layout left")}>
          <div className={classes("column-layout group")}>
            <div className={classes("column-layout group_1")}>
              <div className={classes("column-layout group_2")}>
                <h5 className={classes("h5")}>
                  <span>Set new password</span>
                </h5>
                <p className={classes("typography__body-2 text")}>
                  <span>Please, type your new password and click confirm. </span>
                </p>
              </div>
              <div className={classes("column-layout group_1")}>
                <IgrInput type="password" label="Password" placeholder="Min 8 characters" required outlined="false" className={classes("input")}></IgrInput>
                <IgrInput type="password" label="Repeat Password" placeholder="Min 8 characters" required outlined="false" className={classes("input")}></IgrInput>
              </div>
            </div>
            <IgrButton clicked={() => navigate(`/home/login`)} className={classes("button")}>
              <span key={uuid()}>confirm new password</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
        <div className={classes("row-layout right")}></div>
        <h5 className={classes("h5_1")}>
          <span>ECORIDE</span>
        </h5>
      </div>
    </>
  );
}
