import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import HeaderSocial from "./sub-components/HeaderSocial";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  return (
    <div className={clsx("clickable-mainmenu", activeState ? "inside" : "")}>
      <div className="clickable-mainmenu-icon">
        <button
          className="clickable-mainmenu-close"
          onClick={() => getActiveState(false)}
        >
          <span className="pe-7s-close"></span>
        </button>
      </div>
      <div className="side-logo">
        <Link to={BASENAME}>
          <img alt="" src={"../../../public/assets/img/logo/logo.png"} />
        </Link>
      </div>
      {/* nav menu*/}
      <NavMenu sidebarMenu={true} />

      {/* header social */}
      <HeaderSocial />
    </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func,
};

export default OffcanvasMenu;
