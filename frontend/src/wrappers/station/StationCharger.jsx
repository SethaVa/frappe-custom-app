import clsx from "clsx";
import PropTypes from "prop-types";
import StationChargerGridList from "./StationChargerGrigList";

const StationCharger = ({ stations, layout, isLoading }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={clsx("row", layout)}>
        <StationChargerGridList
          stations={stations}
          spaceBottomClass="mb-25"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

StationCharger.propTypes = {
  layout: PropTypes.string,
  stations: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default StationCharger;
