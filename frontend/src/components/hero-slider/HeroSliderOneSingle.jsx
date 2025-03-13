import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div
      className="single-slider slider-height-1"
      style={{ background: "#e8ebea", alignItems: "center" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6"
            style={{ zIndex: 100 }}
          >
            <div className="slider-content slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link className="animated" to={data.url}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
              <img
                className="animated img-fluid"
                src="http://188.166.247.153:8080/private/files/New%20Project%20(1).png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default HeroSliderOneSingle;
