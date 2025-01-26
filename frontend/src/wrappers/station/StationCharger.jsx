import clsx from "clsx";
import PropTypes from "prop-types";
import StationChargerGridList from "./StationChargerGrigList";

const StationCharger = ({ stations, layout, isLoading, center, zoom }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={clsx("row", layout)}>
        <StationChargerGridList
          stations={stations}
          spaceBottomClass="mb-25"
          isLoading={isLoading}
          center={center}
          zoom={zoom}
        />
      </div>
    </div>
  );
};

StationCharger.propTypes = {
  layout: PropTypes.string,
  stations: PropTypes.array,
  isLoading: PropTypes.bool,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default StationCharger;
