import clsx from "clsx";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import Rating from "./sub-components/ProductRating";

const ProductGridListSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
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
          <Link to={"/product/" + product.name}>
            <img className="default-img" src={product?.image} alt="" />
          </Link>
          {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="purple">New</span> : ""}
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
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Buy now{" "}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link to={`/product/${product.name}`}>Select Option</Link>
              ) : !(product.stock_quantity && product.stock_quantity > 0) ? (
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
            <Link to={"/product/" + product.name}>{product.item_name}</Link>
          </h3>
          {product.rating && product.rating > 0 ? (
            <div className="product-rating">
              <Rating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            {discountedPrice !== null ? (
              <Fragment>
                <span className="new">
                  <NumericFormat
                    value={currency.currencySymbol + finalProductPrice}
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
              <NumericFormat
                value={currency.currencySymbol + finalProductPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className="shop-list-wrap mb-30">
        <div className="row">
          <div className="col-xl-4 col-md-5 col-sm-6">
            <div className="product-list-image-wrap">
              <div className="product-img">
                <Link to={"/product/" + product.name}>
                  <img
                    className="default-img img-fluid"
                    src={product.image}
                    alt=""
                  />
                </Link>
                {product.discount || product.new ? (
                  <div className="product-img-badges">
                    {product.discount ? (
                      <span className="pink">-{product.discount}%</span>
                    ) : (
                      ""
                    )}
                    {product.new ? <span className="purple">New</span> : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7 col-sm-6">
            <div className="shop-list-content">
              <h3>
                <Link to={"/product/" + product.name}>{product.item_name}</Link>
              </h3>
              <div className="product-list-price">
                {discountedPrice !== null ? (
                  <Fragment>
                    <span className="new">
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
                  <NumericFormat
                    value={currency.currencySymbol + finalProductPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                )}
              </div>
              {product.rating && product.rating > 0 ? (
                <div className="rating-review">
                  <div className="product-list-rating">
                    <Rating ratingValue={product.rating} />
                  </div>
                </div>
              ) : (
                ""
              )}

              {product.custom_short_description ? (
                <p
                  className="product-list-short-description"
                  dangerouslySetInnerHTML={{
                    __html: product.custom_short_description,
                  }}
                ></p>
              ) : (
                ""
              )}

              <div className="shop-list-actions d-flex align-items-center">
                <div className="shop-list-btn btn-hover">
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      Buy now{" "}
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link to={`/product/${product.name}`}>Select Option</Link>
                  ) : !(
                      product.stock_quantity && product.stock_quantity > 0
                    ) ? (
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

                <div className="shop-list-wishlist ml-10">
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
                <div className="shop-list-compare ml-10">
                  <button
                    className={compareItem !== undefined ? "active" : ""}
                    disabled={compareItem !== undefined}
                    title={
                      compareItem !== undefined
                        ? "Added to compare"
                        : "Add to compare"
                    }
                    onClick={() => dispatch(addToCompare(product))}
                  >
                    <i className="pe-7s-shuffle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductGridListSingle.propTypes = {
  cartItem: PropTypes.shape({
    quantity: PropTypes.number,
  }),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({
    currencyRate: PropTypes.number,
    currencySymbol: PropTypes.string,
  }),
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    valuation_rate: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
    new: PropTypes.number,
    affiliateLink: PropTypes.string,
    variation: PropTypes.array,
    stock_quantity: PropTypes.number,
    item_name: PropTypes.string,
    rating: PropTypes.number,
    selectedProductColor: PropTypes.string,
    selectedProductSize: PropTypes.string,
    custom_short_description: PropTypes.string,
    category: PropTypes.array,
    tag: PropTypes.array,
    description: PropTypes.string,
  }),
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.shape({}),
};

export default ProductGridListSingle;
