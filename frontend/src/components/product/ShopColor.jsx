import PropTypes from "prop-types";

const ShopColor = ({ colors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <div className="shop-select">
            <select
              onChange={(e) => {
                getSortParams("color", e.target.value);
              }}
            >
              <option value="">All Colors </option>
              {colors.map((color, key) => {
                return (
                  <option key={key} value={color?.name}>
                    {color?.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopColor;
