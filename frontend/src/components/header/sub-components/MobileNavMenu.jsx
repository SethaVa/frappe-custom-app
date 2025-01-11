import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={"/"}>{t("home")}</Link>
        </li>
        <li>
          <Link to={"/collection"}>{t("collection")}</Link>
        </li>
        <li>
          <Link to={"/station"}>{t("station")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={"/"}>{t("my_account")}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={"/my-account"}>{t("my_account")}</Link>
            </li>
            <li>
              <Link to={"/login-register"}>{t("login_register")}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contact"}>{t("contact_us")}</Link>
        </li>
        <li>
          <Link to={"/about"}>{t("about_us")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
