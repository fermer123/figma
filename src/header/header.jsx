import style from './header.module.scss';
import png from '../png/logo.png';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.header_wrapper}>
          <div className={style.logo}>
            <a to='./Home' className={style.logo_link}>
              <img src={png} alt='Logo' className={style.logo_png} />
            </a>
          </div>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.item}>
                <a to='./Articles' className={style.logo_link}>
                  Articles
                </a>
              </li>
              <li className={style.item}>
                <a to='./Locations' className={style.logo_link}>
                  Locations
                </a>
              </li>
              <li className={style.item}>
                <a to='./Videos' className={style.logo_link}>
                  Videos
                </a>
              </li>
              <li className={style.item}>
                <a to='./Videos' className={style.logo_link}>
                  Sign in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
