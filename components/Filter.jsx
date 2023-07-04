import { useState } from "react";
import data from "../data/data.json";
import style from "./FIlter.module.css";

const Filter = ({ setFilter }) => {
  const [searchValue, setSearchValue] = useState("");
  const regions = [...new Set(data.map((i) => i.region))];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
        className={style.search_input}
      />
      <select
        onChange={(event) => setFilter(event.target.value)}
        className={style.select}
      >
        <option value="" className={style.option}>
          Filter by Region
        </option>
        {regions.map((item) => (
          <option key={item} value={item} className={style.option}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
