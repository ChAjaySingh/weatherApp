import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let getInfo = (info) => {
    setWeatherInfo((prev) => (prev = info));
  };

  return (
    <div className="WeatherApp">
      <SearchBox getInfo={getInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
