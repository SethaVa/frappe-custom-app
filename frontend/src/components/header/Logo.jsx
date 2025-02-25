import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={clsx(logoClass)}>
      <Link to={BASENAME}>
        <img alt="" src={imageUrl} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
