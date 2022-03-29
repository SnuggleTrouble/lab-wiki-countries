// src/App.js
import "./App.css";
import { NavBar } from "./components/NavBar";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
