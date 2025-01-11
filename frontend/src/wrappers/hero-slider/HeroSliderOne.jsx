import { EffectFade } from "swiper/modules";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const HeroSliderOne = () => {
  console.log("heroSliderData", heroSliderData);
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {heroSliderData && (
          <Swiper options={params}>
            {heroSliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderOneSingle data={single} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderOne;
