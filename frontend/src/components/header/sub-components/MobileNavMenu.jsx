import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={BASENAME}>{t("home")}</Link>
        </li>
        <li>
          <Link to={BASENAME + "/collection"}>{t("collection")}</Link>
        </li>
        <li>
          <Link to={BASENAME + "/station"}>{t("station")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={BASENAME}>{t("my_account")}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={BASENAME + "/my-account"}>{t("my_account")}</Link>
            </li>
            <li>
              <Link to={BASENAME + "/login-register"}>{t("login_register")}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={BASENAME + "/contact"}>{t("contact_us")}</Link>
        </li>
        <li>
          <Link to={BASENAME + "/about"}>{t("about_us")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
