import PropTypes from "prop-types";

const StationProvince = ({ provinces, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Province </h4>
      <div className="sidebar-widget-list mt-10">
        <div className="shop-select">
          <select onChange={(e) => getSortParams("province", e.target.value)}>
            <option value="">All Provinces</option>
            {provinces.map((province, key) => {
              return (
                <option key={key} value={province.name}>
                  {province.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

StationProvince.propTypes = {
  provinces: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default StationProvince;
