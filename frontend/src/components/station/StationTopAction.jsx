import { Locate } from "lucide-react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const StationTopAction = ({ locations, getFilterParams }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.select(); // Select all the text in the input field
    }
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
    setIsSearching(false);
  };

  const onSearch = (location) => {
    setInputValue(location.label);
    setIsSearching(true);
    getFilterParams(location.value);
  };
  return (
    <div className="mb-35">
      <div className="station-search">
        <div className="search-content">
          <form action="#">
            <input
              type="text"
              ref={inputRef}
              placeholder="Search"
              onClick={handleClick}
              value={inputValue}
              onChange={onChange}
            />
          </form>
          <div
            className={
              inputValue && !isSearching
                ? "dropdown-content active"
                : "dropdown-content"
            }
          >
            <ul>
              {locations
                .filter((item) => {
                  const searchTerm = inputValue.toLocaleLowerCase();
                  const name = item.label;

                  return (
                    searchTerm &&
                    name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    name !== inputValue
                  );
                })
                .slice(0, 5)
                .map((location, index) => (
                  <li key={index} onClick={() => onSearch(location)}>
                    <Locate width={16} height={16} />
                    <span>{location.label}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

StationTopAction.propTypes = {
  selectedLocation: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  locations: PropTypes.array,
  getFilterParams: PropTypes.func,
};

export default StationTopAction;
