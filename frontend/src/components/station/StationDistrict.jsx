import PropTypes from "prop-types";

const StationDistrict = ({ districts, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">District </h4>
      <div className="sidebar-widget-list mt-10">
        <div className="shop-select">
          <select onChange={(e) => getSortParams("district", e.target.value)}>
            <option value="">All District</option>
            {districts.map((district, key) => {
              return (
                <option key={key} value={district.name}>
                  {district.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

StationDistrict.propTypes = {
  districts: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default StationDistrict;
