import style from './footer.module.scss';
import logo from '../png/logo.png';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_item}>
          <div className={style.footer_logo}>
            <img src={logo} alt='logo' />
          </div>
          <nav className={style.footer_nav}>
            <ul className={style.footer_menu}>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link_title}>
                  Company
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  About
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Team
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Careers
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className={style.footer_menu}>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link_title}>
                  Locations
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Tokyo
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Kyoto
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Osaka
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Hokkaido
                </a>
              </li>
            </ul>
            <ul className={style.footer_menu}>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link_title}>
                  Social Media
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Facebook
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Twitter
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Instagram
                </a>
              </li>
              <li className={style.footer_menu_item}>
                <a href='#!' className={style.footer_menu_link}>
                  Youtube
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
