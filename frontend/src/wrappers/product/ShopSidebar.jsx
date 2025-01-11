import clsx from "clsx";
import PropTypes from "prop-types";
import ShopSearch from "../../components/product/ShopSearch";
// import ShopSize from "../../components/product/ShopSize";
// import ShopTag from "../../components/product/ShopTag";
import { useFrappeGetCall } from "frappe-react-sdk";
import ShopBrand from "../../components/product/ShopBrand";
import ShopModel from "../../components/product/ShopModel";

const ShopSidebar = ({ getSortParams, sideSpaceClass, getSearch }) => {
  const { data: brandOpts } = useFrappeGetCall(
    "evcar.api.brand.get_brand_options"
  );

  const { data: modelOpts } = useFrappeGetCall(
    "evcar.api.item_group.get_item_groups_options"
  );

  // const { data: colorOpts } = useFrappeGetCall(
  //   "evcar.api.item.get_all_color_options"
  // );

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch getSearch={getSearch} />

      {/* filter by brand */}
      <ShopBrand
        brands={brandOpts?.message || []}
        getSortParams={getSortParams}
      />

      {/* filter by categories */}
      <ShopModel
        models={modelOpts?.message || []}
        getSortParams={getSortParams}
      />

      {/* filter by color */}
      {/* <ShopColor
        colors={colorOpts?.message || []}
        getSortParams={getSortParams}
      /> */}

      {/* filter by size */}
      {/* <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} /> */}

      {/* filter by tag */}
      {/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  sideSpaceClass: PropTypes.string,
  getSearch: PropTypes.func,
};

export default ShopSidebar;
