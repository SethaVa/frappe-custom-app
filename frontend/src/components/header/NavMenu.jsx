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
            <Link to={BASENAME}>Home</Link>
          </li>
          <li>
            <Link to={BASENAME + "/collection"}>Collection</Link>
          </li>
          <li>
            <Link to={BASENAME + "/accessory"}>Accessory</Link>
          </li>
          <li>
            <Link to={BASENAME + "/station"}>Station</Link>
          </li>
          <li>
            <Link to={BASENAME + "/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={BASENAME + "/about"}>About Us</Link>
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
