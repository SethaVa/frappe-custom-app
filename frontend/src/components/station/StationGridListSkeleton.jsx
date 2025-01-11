import { clsx } from "clsx";
import PropTypes from "prop-types";
import { Fragment } from "react";
import CusSkeleton from "../skeleton";

const StationGridListSkeleton = ({ spaceBottomClass }) => {
  return (
    <Fragment>
      <div className={clsx("station-wrap", spaceBottomClass)}>
        <div className="station-map">
          <CusSkeleton style={{ height: "350px" }} />
        </div>
        <div className="station-content text-center">
          <CusSkeleton style={{ height: "20px" }} />
        </div>
        <div>
          <CusSkeleton style={{ height: "20px" }} />
        </div>
        {/* <div>{station?.Connections?.ConnectionType?.Title}</div> */}
        <div>
          <CusSkeleton style={{ height: "20px" }} />
        </div>
        <div>
          <CusSkeleton style={{ height: "20px" }} />
        </div>
        <div>
          <CusSkeleton style={{ height: "20px" }} />
        </div>

        <div>
          <CusSkeleton style={{ height: "20px" }} />
        </div>
        <div className="shop-list-actions d-flex align-items-center">
          <div className="station-list-btn btn-hover">
            <CusSkeleton style={{ height: "45px", width: "150px" }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StationGridListSkeleton.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default StationGridListSkeleton;
