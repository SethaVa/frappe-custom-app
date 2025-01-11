import clsx from "clsx";
import PropTypes from "prop-types";
import BannerOneSingle from "../../components/banner/BannerOneSingle";
import bannerData from "../../data/banner/banner-one.json";

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {bannerData?.map((single, key) => (
            <div className="col-lg-4 col-md-4" key={key}>
              <BannerOneSingle data={single} spaceBottomClass="mb-30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerOne;
