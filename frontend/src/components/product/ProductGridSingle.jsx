import clsx from "clsx";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import Rating from "./sub-components/ProductRating";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const ProductGridSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  spaceBottomClass,
}) => {
  const discountedPrice = getDiscountPrice(
    product.valuation_rate,
    product.discount
  );
  const finalProductPrice = +(
    product.valuation_rate * currency.currencyRate
  ).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="product-img">
          <Link to={BASENAME + "/product/" + product?.name}>
            <img className="default-img" src={product?.image} alt="" />
          </Link>
          {product?.discount || product?.new ? (
            <div className="product-img-badges">
              {product?.discount ? (
                <span className="pink">-{product?.discount}%</span>
              ) : (
                ""
              )}
              {product?.new ? <span className="purple">New</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={() => dispatch(addToWishlist(product))}
              >
                <i className="pe-7s-like" />
              </button>
            </div>
            <div className="pro-same-action pro-cart">
              {product?.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Buy now{" "}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link to={BASENAME + `/product/${product.id}`}>Select Option</Link>
              ) : product.stock_quantity && product.stock_quantity > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? "active"
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? "Added to cart" : "Add to cart"
                  }
                >
                  {" "}
                  <i className="pe-7s-cart"></i>{" "}
                  {cartItem !== undefined && cartItem.quantity > 0
                    ? "Added"
                    : "Add to cart"}
                </button>
              ) : (
                <button disabled className="active">
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <Link to={BASENAME + "/product/" + product?.name}>{product?.item_name}</Link>
          </h3>
          {product?.rating && product?.rating > 0 ? (
            <div className="product-rating">
              <Rating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            {discountedPrice !== null ? (
              <Fragment>
                <span>
                  <NumericFormat
                    value={currency.currencySymbol + finalDiscountedPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </span>{" "}
                <span className="old">
                  <NumericFormat
                    value={currency.currencySymbol + finalProductPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </span>
              </Fragment>
            ) : (
              <span>
                <NumericFormat
                  value={currency.currencySymbol + finalProductPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  cartItem: PropTypes.shape({
    quantity: PropTypes.number,
  }),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({
    currencyRate: PropTypes.number,
    currencySymbol: PropTypes.string,
  }),
  product: PropTypes.shape({
    id: PropTypes.number,
    item_name: PropTypes.string,
    valuation_rate: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
    new: PropTypes.number,
    affiliateLink: PropTypes.string,
    variation: PropTypes.array,
    stock_quantity: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;
