import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';


export default function SearchBox({ getInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let [error, setError] = useState(false);
  let [city, setCity] = useState("Palwal");

  let getWeatherInfo = async () => {
    try {
      let weatherResponse = await fetch(
        `${API_URL}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      ).then((res) => res.json());
      // console.log(weatherResponse);
      return {
        name: weatherResponse.name,
        feelsLike: weatherResponse.main.feels_like,
        temp: weatherResponse.main.temp,
        weather: weatherResponse.weather[0].description,
        windSpeed: weatherResponse.wind.speed,
        humidity: weatherResponse.main.humidity,
        pressure: weatherResponse.main.pressure,
      };
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity((prevCity) => (prevCity = event.target.value));
  };

  let hanldeSubmit = async (event) => {
    try {
      event.preventDefault();
      let weather = await getWeatherInfo();
      getInfo(weather);
      setError(false);
      return setCity((prevCity) => (prevCity = ""));
    } catch (err) {
      setError (true);
    }
  };

  useEffect(() => {
    async function firstRes() {
      let weather = await getWeatherInfo();
      getInfo(weather);
    }
    firstRes();
  }, []);
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          size="medium"
          startIcon={<TravelExploreIcon />}
          type="submit"
        >
          Search
        </Button>
      </form>
      {error && <div style={{marginTop: "1rem"}}>< Alert severity="error">No such place exists! </Alert></div>}
    </div>
  );
}
