import clsx from "clsx";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={BASENAME}>{t("home")}</Link>
          </li>
          <li>
            <Link to={BASENAME + "/collection"}>{t("collection")}</Link>
          </li>
          <li>
            <Link to={BASENAME + "/accessory"}>{t("accessory")}</Link>
          </li>
          <li>
            <Link to={BASENAME + "/station"}>{t("station")}</Link>
          </li>
          <li>
            <Link to={BASENAME + "/contact"}>{t("contact_us")}</Link>
          </li>
          <li>
            <Link to={BASENAME + "/about"}>{t("about_us")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
