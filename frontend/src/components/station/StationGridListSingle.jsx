import { clsx } from "clsx";
import PropTypes from "prop-types";
import { Fragment } from "react";
import GoogleMap from "../google-map";
import CusSkeleton from "../skeleton";

const StationGridListSingle = ({ station, spaceBottomClass, isLoading }) => {
  return (
    <Fragment>
      <div className={clsx("station-wrap", spaceBottomClass)}>
        <div className="station-map">
          {isLoading ? (
            <CusSkeleton style={{ height: "350px" }} />
          ) : (
            <GoogleMap
              lat={station?.AddressInfo?.Latitude}
              lng={station?.AddressInfo?.Longitude}
              zoom={13}
            />
          )}
        </div>
        <div className="station-content text-center">
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            <h3>{station?.AddressInfo?.Title}</h3>
          )}
        </div>
        <div>
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            "CMS-" + station?.ID
          )}
        </div>
        {/* <div>{station?.Connections?.ConnectionType?.Title}</div> */}
        <div>
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            station?.OperatorInfo?.Title
          )}
        </div>
        <div>
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            <>
              <span>Nearest Address: </span>
              <span>{station?.AddressInfo?.AddressLine1}</span>
            </>
          )}
        </div>
        <div>
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            <>
              <span>Lat/Long: </span>
              <span>
                {station?.AddressInfo?.Latitude} {" / "}
                {station?.AddressInfo?.Longitude}
              </span>
            </>
          )}
        </div>

        <div>
          {isLoading ? (
            <CusSkeleton style={{ height: "20px" }} />
          ) : (
            <>
              <span>Contact: </span>
              {station?.AddressInfo?.ContactTelephone1 ? (
                <span>{station?.AddressInfo?.ContactTelephone1}</span>
              ) : (
                " - "
              )}
            </>
          )}
        </div>
        <div className="shop-list-actions d-flex align-items-center">
          <div className="station-list-btn btn-hover">
            {isLoading ? (
              <CusSkeleton style={{ height: "45px", width: "150px" }} />
            ) : (
              <button>View Detail </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StationGridListSingle.propTypes = {
  station: PropTypes.shape({
    ID: PropTypes.number,
    AddressInfo: PropTypes.shape({
      Title: PropTypes.string,
      AddressLine1: PropTypes.string,
      AddressLine2: PropTypes.string,
      Town: PropTypes.string,
      Latitude: PropTypes.number,
      Longitude: PropTypes.number,
      ContactTelephone1: PropTypes.string,
      ContactTelephone2: PropTypes.string,
    }),
    Connections: PropTypes.array,
    OperatorInfo: PropTypes.shape({
      Title: PropTypes.string,
    }),
  }),
  spaceBottomClass: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default StationGridListSingle;
