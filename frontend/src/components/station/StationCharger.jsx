import PropTypes from "prop-types";

const StationCharger = ({ chargers, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Charger </h4>
      <div className="sidebar-widget-list mt-10">
        <div className="shop-select">
          <select onChange={(e) => getSortParams("charger", e.target.value)}>
            <option value="">All Chargers</option>
            {chargers.map((charger, key) => {
              return (
                <option key={key} value={charger.name}>
                  {charger.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

StationCharger.propTypes = {
  chargers: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default StationCharger;
