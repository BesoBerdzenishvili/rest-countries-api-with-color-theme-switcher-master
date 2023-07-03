import Link from "next/link";
import "./Country.css";
import Image from "next/image";

function Country({ data }) {
  const { flags, name, capital, region, population } = data;
  return (
    <Link href={`/${name}`}>
      <div className="wrapper">
        <Image src={flags.svg} alt={name} width={270} height={180} />
        <div className="description">
          <h2>{name}</h2>
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
