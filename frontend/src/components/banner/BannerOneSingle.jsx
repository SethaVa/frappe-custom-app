import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const BannerOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={ BASENAME + data.link}>
        <img src="../../../public/assets/img/banner/banner-1.jpg" alt="" />
      </Link>
      <div className="banner-content">
        <h3>{data.title}</h3>
        <h4>
          {data.subtitle} <span>{data.price}</span>
        </h4>
        <Link to={BASENAME + data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.number,
  }),
  spaceBottomClass: PropTypes.string,
};

export default BannerOneSingle;
