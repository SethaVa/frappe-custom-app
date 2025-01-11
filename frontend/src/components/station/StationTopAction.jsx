import PropTypes from "prop-types";

const StationTopAction = ({ stationCount, sortedStationCount }) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="shop-tab">
        <p>
          Showing {sortedStationCount} of {stationCount} result
        </p>
      </div>
    </div>
  );
};

StationTopAction.propTypes = {
  stationCount: PropTypes.number,
  sortedStationCount: PropTypes.number,
};

export default StationTopAction;
