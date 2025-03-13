import { useFrappeGetDocList } from "frappe-react-sdk";
import { Fragment, useState } from "react";
import Paginator from "react-hooks-paginator";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import useDebounce from "../../hooks/use-debounce";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopProducts from "../../wrappers/product/ShopProducts";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";

const Collection = () => {
  const [layout, setLayout] = useState("grid three-column");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [modelFilter, setModelFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [search, setSearch] = useDebounce([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 15;
  console.log(offset);

  let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSearch = (searchValue) => {
    const filter = ["item_name", "like", `%${searchValue}%`];
    setSearch(searchValue ? filter : []);
    console.log("search", search);
  };

  const getSortParams = (sortType, sortValue) => {
    const filter = [sortType, "=", sortValue];
    switch (sortType) {
      case "brand":
        setBrandFilter(sortValue ? filter : []);
        break;
      case "item_group":
        setModelFilter(sortValue ? filter : []);
        break;
      default:
        break;
    }
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortValue(sortValue);
  };

  const { data: products } = useFrappeGetDocList(
    "Item",
    {
      fields: ["*"],
      filters: [
        ["custom_category", "=", "Vehicle"],
        ...(search.length ? [search] : []),
        ...(modelFilter.length ? [modelFilter] : []),
        ...(brandFilter.length ? [brandFilter] : []),
      ],
      orderBy: filterSortValue
        ? {
            field: "valuation_rate",
            order: filterSortValue === "priceHighToLow" ? "desc" : "asc",
          }
        : undefined,
      limit: pageLimit,
      limit_start: pageLimit * (currentPage - 1) + (currentPage - 1),
    },
    [
      "product_list",
      search,
      currentPage,
      modelFilter,
      brandFilter,
      filterSortValue,
    ]
  );

  const { data: totalProduct } = useFrappeGetDocList(
    "Item",
    {
      fields: ["name"],
      filters: [
        ["custom_category", "=", "Vehicle"],
        ...(search.length ? [search] : []),
        ...(modelFilter.length ? [modelFilter] : []),
        ...(brandFilter.length ? [brandFilter] : []),
      ],
    },
    [
      "product_count",
      search,
      currentPage,
      modelFilter,
      brandFilter,
      filterSortValue,
    ]
  );

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Collection", path: pathname },
          ]}
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                  getSearch={getSearch}
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={totalProduct?.length || 0}
                  sortedProductCount={products?.length || 0}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={products || []} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={totalProduct?.length || 0}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Collection;
