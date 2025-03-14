import cn from "clsx";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlider = forwardRef(
  ({ options, prevIcon, nextIcon, children, className, navClass }, ref) => {
    const modules = options?.modules !== undefined ? options.modules : [];
    const prevClass = `prev-${navClass || "swiper-nav"}`;
    const nextClass = `next-${navClass || "swiper-nav"}`;
    const sliderOptions = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      autoplay: options?.autoplay
        ? {
            delay: 2500,
            disableOnInteraction: false,
          }
        : false,
      watchSlidesProgress: true,
      autoHeight: true,
      breakpoints: {},
      ...options,
      modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
      navigation: options?.navigation
        ? {
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }
        : false,
      pagination: options?.pagination
        ? {
            clickable: true,
          }
        : false,
    };

    return (
      <div className={cn("swiper-wrap", className)} ref={ref}>
        <Swiper {...sliderOptions}>{children}</Swiper>

        {sliderOptions?.navigation && (
          <>
            <button
              type="button"
              className={`swiper-button-prev ht-swiper-button-nav ${prevClass}`}
            >
              <i className={cn(prevIcon, "icon")} />
            </button>
            <button
              type="button"
              className={`swiper-button-next ht-swiper-button-nav ${nextClass}`}
            >
              <i className={cn(nextIcon, "icon")} />
            </button>
          </>
        )}
      </div>
    );
  }
);

SwiperSlider.displayName = "SwiperSlider";

export { SwiperSlide };

SwiperSlider.propTypes = {
  options: PropTypes.shape({
    modules: PropTypes.array,
    navigation: PropTypes.bool,
    pagination: PropTypes.bool,
    autoplay: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }),
  prevIcon: PropTypes.string,
  nextIcon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  navClass: PropTypes.string,
};

SwiperSlider.defaultProps = {
  prevIcon: "pe-7s-angle-left",
  nextIcon: "pe-7s-angle-right",
  navStyle: 1,
  dotStyle: 1,
};

export default SwiperSlider;
