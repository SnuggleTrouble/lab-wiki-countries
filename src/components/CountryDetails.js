import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  const selectedCountry = countries.find(
    (countryObj) => countryObj.alpha3Code === alpha3Code
  );

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
        alt={`${selectedCountry.name.common}`}
        style={{ width: "300px" }}
      />
      <h1>{selectedCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {selectedCountry.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
