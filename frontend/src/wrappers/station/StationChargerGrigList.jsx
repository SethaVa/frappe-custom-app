import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import PropTypes from "prop-types";
import { Fragment, useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const StationChargerGridList = ({ stations, center, zoom }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    stations.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    map.setZoom(zoom);
    setMap(map);
  }, []);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="contact-map mb-10">
        <div style={{ height: "100%", width: "100%" }}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              {stations.map((station) => (
                <Marker
                  key={station.ID}
                  position={{
                    lat: station.AddressInfo.Latitude,
                    lng: station.AddressInfo.Longitude,
                  }}
                  title={station.AddressInfo.Title}
                  onClick={() => handleActiveMarker(station.ID)}
                >
                  {activeMarker === station.ID ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <>
                        <div className="station-content text-center">
                          <h3>{station?.AddressInfo?.Title}</h3>
                        </div>
                        <div>{"CMS-" + station?.ID}</div>
                        <div>{station?.OperatorInfo?.Title}</div>
                        <div>
                          <>
                            <span>Nearest Address: </span>
                            <span>{station?.AddressInfo?.AddressLine1}</span>
                          </>
                        </div>
                        <div>
                          <>
                            <span>Lat/Long: </span>
                            <span>
                              {station?.AddressInfo?.Latitude} {" / "}
                              {station?.AddressInfo?.Longitude}
                            </span>
                          </>
                        </div>

                        <div>
                          <>
                            <span>Contact: </span>
                            {station?.AddressInfo?.ContactTelephone1 ? (
                              <span>
                                {station?.AddressInfo?.ContactTelephone1}
                              </span>
                            ) : (
                              " - "
                            )}
                          </>
                        </div>
                      </>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))}
            </GoogleMap>
          )}
        </div>
      </div>
    </Fragment>
  );
};

StationChargerGridList.propTypes = {
  stations: PropTypes.array,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

StationChargerGridList.defaultProps = {
  stations: [],
  zoom: 12,
  center: {
    lat: 11.5563738,
    lng: 104.9282099,
  },
};

export default StationChargerGridList;
