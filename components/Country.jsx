import Link from "next/link";
import style from "./Country.module.css";
import Image from "next/image";

function Country({ data }) {
  const { flags, name, capital, region, population } = data;
  return (
    <Link href={`/${name}`} className={style.container}>
      <div className={style.wrapper}>
        <Image src={flags.svg} alt={name} width={270} height={180} />
        <div className={style.description}>
          <h2 className={style.country_name}>{name}</h2>
          <p>
            <b>Population:</b> {population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
