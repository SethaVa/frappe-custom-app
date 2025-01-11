import PropTypes from "prop-types";
import { useState } from "react";
import Select from "react-select";

const SearchableDropdown = ({ defaultSelect, options, onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelect);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelectOption(selected);
  };

  return (
    <>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Select a location..."
        isSearchable
      />
    </>
  );
};

SearchableDropdown.propTypes = {
  options: PropTypes.array,
  defaultSelect: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  onSelectOption: PropTypes.func,
};

export default SearchableDropdown;
