import data from "../data/data.json";
import Country from "./Country";
import style from "./Countries.module.css";

function Countries() {
  return (
    <div className={style.wrapper}>
      {data.map((country) => (
        <Country data={country} />
      ))}
    </div>
  );
}

export default Countries;
