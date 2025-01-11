import PropTypes from "prop-types";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGridList = ({ products, spaceBottomClass }) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <Fragment>
      {products?.map((product, index) => {
        return (
          <div className="col-xl-4 col-sm-6" key={index}>
            <ProductGridListSingle
              key={index}
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={cartItems.find(
                (cartItem) => cartItem.name === product.name
              )}
              wishlistItem={wishlistItems.find(
                (wishlistItem) => wishlistItem.name === product.name
              )}
              compareItem={compareItems.find(
                (compareItem) => compareItem.name === product.name
              )}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
