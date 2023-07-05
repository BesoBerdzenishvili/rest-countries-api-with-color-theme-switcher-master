import React from "react";
import Link from "next/link";
import data from "../../../data/data.json";
import style from "./page.module.css";

function Page({ params }) {
  const country = data.find(
    (i) => i.name === decodeURIComponent(params.country_details)
  );
  return (
    <div className={style.container}>
      <div className={style.btn_container}>
        <Link href="/">
          <button className={style.back_btn}>&larr; Back</button>
        </Link>
      </div>
      <div className={style.country}>
        <img
          src={country.flags.svg}
          alt={`${country.name}'s flag`}
          className={style.flag_img}
        />
        <div className={style.country_data}>
          <div className={style.country_board}>
            <div className={style.left_boar}>
              <h2>{decodeURIComponent(country.name)}</h2>
              <p>
                <b>Native Name:</b> {decodeURIComponent(country.nativeName)}
              </p>
              <p>
                <b>Population:</b> {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>
              {country.capital && (
                <p>
                  <b>Capital:</b> {country.capital}
                </p>
              )}
            </div>
            <br />
            <div className={style.right_board}>
              <p>
                <b>Top Level Domain:</b> {country.topLevelDomain}
              </p>
              {country.currencies && (
                <p>
                  <b>Currencies:</b>{" "}
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
              )}
              <p>
                <b>Languages:</b>{" "}
                {country.languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>

          {country.borders && (
            <div className={style.borders_wrapper}>
              <b>Border Countries: </b>
              <div className={style.border_countries}>
                {country.borders
                  .map((border) =>
                    data.find((country) => country.alpha3Code === border)
                  )
                  .map((country) => (
                    <div className={style.border_country} key={country.name}>
                      {country.name}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
