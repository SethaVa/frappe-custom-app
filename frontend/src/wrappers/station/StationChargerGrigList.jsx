import PropTypes from "prop-types";
import { Fragment } from "react";
import StationGridListSingle from "../../components/station/StationGridListSingle";
import StationGridListSkeleton from "../../components/station/StationGridListSkeleton";

const StationChargerGridList = ({ stations, spaceBottomClass, isLoading }) => {
  return (
    <Fragment>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div className="col-xl-4 col-sm-6" key={index}>
              <StationGridListSkeleton key={index} />
            </div>
          ))
        : stations?.map((station, index) => {
            return (
              <div className="col-xl-4 col-sm-6" key={index}>
                <StationGridListSingle
                  key={index}
                  spaceBottomClass={spaceBottomClass}
                  station={station}
                />
              </div>
            );
          })}
    </Fragment>
  );
};

StationChargerGridList.propTypes = {
  stations: PropTypes.array,
  spaceBottomClass: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default StationChargerGridList;
