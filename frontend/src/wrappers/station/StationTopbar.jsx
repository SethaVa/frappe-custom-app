import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import StationTopAction from "../../components/station/StationTopAction";

const StationTopbar = ({ getFilterParams, locations }) => {
  const [selectedLocation] = useState(locations[0]);

  return (
    <Fragment>
      {/* shop top action */}
      <StationTopAction
        selectedLocation={selectedLocation}
        locations={locations || []}
        getFilterParams={(value) => {
          getFilterParams(value);
        }}
      />
    </Fragment>
  );
};

StationTopbar.propTypes = {
  getFilterParams: PropTypes.func,
  locations: PropTypes.array,
};

export default StationTopbar;
