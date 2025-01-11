import clsx from "clsx";
import PropTypes from "prop-types";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>
            Welcome To EVCar, your ultimate destination for exploring,
            comparing, and accessing the world’s best electric cars—all in one
            place!
          </h1>
          <p>
            At E-Car Marketplace, we believe the future of mobility is electric.
            That’s why we’ve created an easy-to-use platform where you can
            browse a comprehensive collection of electric vehicles (EVs) from
            leading brands. Our mission is simple: to make finding and
            purchasing your perfect EV as effortless as possible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
