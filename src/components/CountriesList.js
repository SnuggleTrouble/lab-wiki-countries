import { React } from 'react';
import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((countryObj) => {
        const { alpha2Code, alpha3Code, name } = countryObj;
        return (
          <div key={alpha3Code}>
            <h3>{name.common}</h3>
            <Link key={alpha3Code} to={`/${alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={`Flag of ${name.official}`}
              />
              <p>{name.official}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
