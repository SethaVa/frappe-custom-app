import clsx from "clsx";
import PropTypes from "prop-types";

const TextGridOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-mission", spaceBottomClass)}>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  spaceBottomClass: PropTypes.string,
};

export default TextGridOneSingle;
