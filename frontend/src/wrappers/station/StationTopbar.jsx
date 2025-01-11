import PropTypes from "prop-types";
import { Fragment } from "react";
import StationTopAction from "../../components/station/StationTopAction";

const StationTopbar = ({ stationCount, sortedStationCount }) => {
  return (
    <Fragment>
      {/* shop top action */}
      <StationTopAction
        stationCount={stationCount}
        sortedStationCount={sortedStationCount}
      />
    </Fragment>
  );
};

StationTopbar.propTypes = {
  stationCount: PropTypes.number,
  sortedStationCount: PropTypes.number,
};

export default StationTopbar;
