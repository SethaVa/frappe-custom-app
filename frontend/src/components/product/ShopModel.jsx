import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";

const ShopModel = ({ models, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Models </h4>
      <div className="sidebar-widget-list mt-30">
        {models ? (
          <div className="shop-select">
            <select
              onChange={(e) => {
                getSortParams("item_group", e.target.value);
                setActiveSort(e);
              }}
            >
              <option value="">All Models</option>
              {models.map((model, key) => {
                return (
                  <option key={key} value={model?.name}>
                    {model?.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          "No model found"
        )}
      </div>
    </div>
  );
};

ShopModel.propTypes = {
  models: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopModel;
