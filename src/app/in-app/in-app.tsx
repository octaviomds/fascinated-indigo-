import { IgrAvatar, IgrAvatarModule, IgrIconButton, IgrIconButtonModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './in-app.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrIconButtonModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function InApp() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [groupVisible, setGroupVisible] = useState<boolean | undefined>(false);

  return (
    <>
      <div className={classes("column-layout in-app-container")}>
        <IgrNavDrawer className={classes("nav-drawer")}>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/dashboard`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>dashboard</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Dashboard</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/acces`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>image_search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Chauffeur</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/contact`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>playlist_add_check</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Contact</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/chauffeur`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>chrome_reader_mode</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Accueil</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/covoiturage`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>question_answer</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>FAQ</div>
            </IgrNavDrawerItem>
          </div>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>settings</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Settings</div>
          </IgrNavDrawerItem>
        </IgrNavDrawer>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
        <div className={classes("row-layout group")}>
          {groupVisible && (
            <div className={classes("row-layout group_1")}>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar")}></IgrAvatar>
              <p className={classes("typography__body-2 text")}>
                <span>Sarah W.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
