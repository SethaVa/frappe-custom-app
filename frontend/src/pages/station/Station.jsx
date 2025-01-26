import { useFrappeGetCall } from "frappe-react-sdk";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import StationTopAction from "../../components/station/StationTopAction";
import mockLocation from "../../data/location.json";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import StationCharger from "../../wrappers/station/StationCharger";

const Station = () => {
  const formatedLocation = mockLocation.map((x) => ({
    label: x.name,
    value: x,
  }));
  const [zoom] = useState(12);
  const [filterValue, setFilterValue] = useState({
    lat: 11.5563738,
    lng: 104.9282099,
  });

  const [locations] = useState(formatedLocation);
  // const [isLoading, setIsLoading] = useState(false);
  // const [stations, setStations] = useState([]);

  let { pathname } = useLocation();

  const getFilterParams = (filterValue) => {
    setFilterValue({
      lat: filterValue.latitude,
      lng: filterValue.longitude,
    });
  };

  const { data: stations, mutate } = useFrappeGetCall(
    "evcar.api.station.get_charging_stations",
    {
      latitude: filterValue.lat,
      longitude: filterValue.lng,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      mutate();
    };

    fetchData();

    console.log("filter", filterValue);
  }, [filterValue]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Station Page"
        description="Station page of evcar eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Station", path: pathname },
          ]}
        />

        <div className="shop-area pt-20 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 order-1 order-lg-2">
                {/* shop topbar default */}
                <StationTopAction
                  getFilterParams={getFilterParams}
                  locations={locations}
                />

                {/* shop page content default */}
                <StationCharger
                  center={filterValue}
                  stations={stations?.message || []}
                  zoom={zoom}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Station;
