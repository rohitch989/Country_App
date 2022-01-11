import Axios from 'axios';

export const continent = ["africa", "americas", "asia", "europe", "oceania"];


export const fetchRegionCountriesName = async (region) => {
  let response = await Axios.get(`https://restcountries.com/v3.1/region/${region}`);
  let countrys = await response.data;
  console.log(countrys)
  let countries = countrys.map(item => item.name.common);
  return countries;
}
export const fetchRegionCountriesDetails = async (countryname) => {
  let response = await Axios.get(`https://restcountries.com/v2/name/${countryname}?fullText=true`);
  let countrysDetails = await response.data;
  let { name, nativeName, flag, capital, subregion, region, population, area, languages } = countrysDetails[0];
  let countryFilter = { name, nativeName, flag, capital, subregion, region, population, area, languages };
  return countryFilter
}