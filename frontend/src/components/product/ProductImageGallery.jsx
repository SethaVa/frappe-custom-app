import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import AnotherLightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ProductImageGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.file_urls.split(",").map((img, i) => ({
    src: img,
    key: i,
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
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
        {product?.file_urls.split(",")?.length ? (
          <Swiper options={gallerySwiperParams}>
            {product.file_urls.split(",").map((single, key) => (
              <SwiperSlide key={key}>
                <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img src={single} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.file_urls.split(",")?.length ? (
          <Swiper options={thumbnailSwiperParams}>
            {product.file_urls.split(",").map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img src={single} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    discount: PropTypes.number,
    new: PropTypes.number,
    file_urls: PropTypes.string,
  }),
};

export default ProductImageGallery;
