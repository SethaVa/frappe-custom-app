import PropTypes from "prop-types";
import SearchableDropdown from "../searchable-dropdown";

const StationLocation = ({ selectedLocation, locations, getFilterParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Location </h4>
      <div className="sidebar-widget-list mt-10">
        <div className="shop-select">
          <SearchableDropdown
            defaultSelect={selectedLocation}
            options={locations}
            onSelectOption={(e) => {
              getFilterParams("location", e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

StationLocation.propTypes = {
  selectedLocation: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  locations: PropTypes.array,
  getFilterParams: PropTypes.func,
};

export default StationLocation;
