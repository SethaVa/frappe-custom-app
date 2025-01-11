import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import { getStationEndPoint } from "../../helpers/station";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import StationCharger from "../../wrappers/station/StationCharger";
import StationSidebar from "../../wrappers/station/StationSidebar";

const Station = () => {
  const [layout] = useState("grid two-column");
  const [filterParams, setFilterParams] = useState();
  const [filterValue, setFilterValue] = useState();
  const [stations, setStation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { pathname } = useLocation();

  const getFilterParams = (filterParams, filterValue) => {
    setFilterParams(filterParams);
    setFilterValue(filterValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
          endpoint: "/api/stations",
          location: filterParams === "location" ? filterValue.value : "",
        });

        const response = await axios.get(url, {
          headers: requestOptions,
        });

        setStation(response.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterParams, filterValue]);

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

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <StationSidebar
                  getFilterParams={getFilterParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop page content default */}
                <StationCharger
                  layout={layout}
                  stations={stations || []}
                  isLoading={isLoading}
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
