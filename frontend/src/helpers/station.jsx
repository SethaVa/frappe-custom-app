const STATION_SERVER =
  "https://7p43nhyvni.execute-api.ap-northeast-1.amazonaws.com";

export const getStationEndPoint = ({ location, radius, endpoint }) => {
  let stationApi = `${STATION_SERVER}/${endpoint}`;

  if (!location && radius) return stationApi;

  if (location) {
    stationApi += `?location=${location}`;
  }

  if (radius) {
    stationApi += `&radius=${radius}`;
  }

  return stationApi;
};
