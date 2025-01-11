import clsx from "clsx";
import PropTypes from "prop-types";

const BrandLogoOneSingle = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)}>
      <img
        src="../../../public/assets/img/brand-logo/brand-logo-1.png"
        alt=""
      />
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  // data: PropTypes.shape({
  //   image: PropTypes.string,
  // }),
  spaceBottomClass: PropTypes.string,
};

export default BrandLogoOneSingle;
