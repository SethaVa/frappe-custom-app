import PropTypes from "prop-types";

const ShopBrand = ({ brands, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Brands </h4>
      <div className="sidebar-widget-list mt-10">
        <div className="shop-select">
          <select onChange={(e) => getSortParams("brand", e.target.value)}>
            <option value="">All Brands</option>
            {brands.map((brand, key) => {
              return (
                <option key={key} value={brand.name}>
                  {brand.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

ShopBrand.propTypes = {
  brands: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopBrand;
