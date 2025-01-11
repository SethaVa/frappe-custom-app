import PropTypes from "prop-types";

const ProductImageFixed = ({ product }) => {
  return (
    <div className="product-large-image-wrapper">
      {product?.discount || product?.new ? (
        <div className="product-img-badges">
          {product?.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product?.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )}

      <div className="product-fixed-image">
        {product?.image ? (
          <img src={product?.image} alt="" className="img-fluid" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

ProductImageFixed.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.array,
    discount: PropTypes.number,
    new: PropTypes.number,
  }),
};

export default ProductImageFixed;
