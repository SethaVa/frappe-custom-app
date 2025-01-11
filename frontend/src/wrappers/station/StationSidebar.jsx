import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import StationLocation from "../../components/station/StationLocation";
import { getStationEndPoint } from "../../helpers/station";

const StationSidebar = ({ getFilterParams, sideSpaceClass }) => {
  const [locationList, setLocationList] = useState([]);
  const [selectedLocation] = useState({
    label: "Phnom Penh 1",
    value: "Phnom Penh 1",
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({});

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const url = getStationEndPoint({
          endpoint: "/api/stations/locations",
        });

        const response = await axios.get(url, {
          headers: requestOptions,
        });

        const mappedLocation = response.data.data.map((x) => ({
          label: x,
          value: x,
        }));

        setLocationList(mappedLocation);
        getFilterParams("location", mappedLocation[0]);
      } catch (err) {
        console.log("Error fetching location data", err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* filter by province */}
      <StationLocation
        selectedLocation={selectedLocation}
        locations={locationList || []}
        getFilterParams={(params, value) => {
          getFilterParams(params, value);
        }}
      />
    </div>
  );
};

StationSidebar.propTypes = {
  getFilterParams: PropTypes.func,
  sideSpaceClass: PropTypes.string,
};

export default StationSidebar;
