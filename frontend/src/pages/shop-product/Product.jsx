import { useFrappeGetCall } from "frappe-react-sdk";
import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BreadcrumbWrap from "../../wrappers/breadcrumb/Breadcrumb";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  // const { products } = useSelector((state) => state.product);
  // const product = products.find((product) => product.name === id);

  const { data: product } = useFrappeGetCall(
    "evcar.api.item.get_items_detail_by_name",
    {
      id,
    }
  );

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <BreadcrumbWrap
          pages={[
            { label: "Home", path: "/" },
            { label: "Shop Product", path: pathname },
          ]}
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product?.message}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        /> */}

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
