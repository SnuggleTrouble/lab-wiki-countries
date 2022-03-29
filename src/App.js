// src/App.js
import './App.css';
import { NavBar } from './components/NavBar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import countries from "./countries.json"

function App() {
  return (
    <div className="App">
    <NavBar />
  
    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
        {/* React-Router Route rendering the CountryDetails should go here */}
      </div>
    </div>
  </div>
  );
}
export default App;
