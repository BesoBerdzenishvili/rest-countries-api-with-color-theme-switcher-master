import data from "../data/data.json";
import Country from "./Country";
import style from "./Countries.module.css";

function Countries({ filter }) {
  return (
    <div className={style.wrapper}>
      {data.map(
        (country) =>
          (country.region === filter ||
            country.name.toLowerCase().includes(filter.toLowerCase())) && (
            <Country key={country.name} data={country} />
          )
      )}
    </div>
  );
}

export default Countries;
