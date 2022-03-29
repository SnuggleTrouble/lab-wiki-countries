import { React } from "react";
import { Link } from "react-router-dom";

export function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((countryObj) => {
          const { alpha2Code, alpha3Code, name } = countryObj;
          return (
            <div>
              <Link
                className="list-group-item list-group-item-action text-center"
                key={alpha3Code}
                to={`/${alpha3Code}`}
              >
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
    </div>
  );
}
