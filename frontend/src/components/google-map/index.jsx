import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const GoogleMap = ({ lat, lng, zoom }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws" }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  zoom: 12,
};

export default GoogleMap;

const Marker = ({ text }) => (
  <div
    className="map-marker"
    style={{
      padding: "5px",
      textAlign: "center",
    }}
  >
    <img
      style={{ width: "20px", height: "30px" }}
      src={"../../../public/assets/img/icon-img/2.png"}
      alt={text}
    />
  </div>
);

Marker.propTypes = {
  text: PropTypes.string,
};
