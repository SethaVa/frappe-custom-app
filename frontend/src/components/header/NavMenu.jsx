import clsx from "clsx";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to={"/collection"}>{t("collection")}</Link>
          </li>
          <li>
            <Link to={"/accessory"}>{t("accessory")}</Link>
          </li>
          <li>
            <Link to={"/station"}>{t("station")}</Link>
          </li>
          <li>
            <Link to={"/contact"}>{t("contact_us")}</Link>
          </li>
          <li>
            <Link to={"/about"}>{t("about_us")}</Link>
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
