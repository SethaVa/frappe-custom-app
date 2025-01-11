import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CusSkeleton = ({ count, style }) => {
  return (
    <SkeletonTheme>
      <Skeleton count={count} style={style} />
    </SkeletonTheme>
  );
};

CusSkeleton.propTypes = {
  count: PropTypes.number,
  style: PropTypes.object,
};

export default CusSkeleton;
