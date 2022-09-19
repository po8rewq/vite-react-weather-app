import NavBar from '../components/NavBar';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Thermometer, Wind } from 'react-bootstrap-icons';
import { getSearchLatLong } from '../utils';

const ViewContainer = styled(Container)`
  margin-top: 20px;
`;

const API_KEY = 'f2e79be490d34aba8d087e519c64000d';

type WeatherData = {
  city_name: string;
  wind_spd: string;
  wind_cdir: string;
  temp: string;
  app_temp: string;
  weather: {
    icon: string;
    code: string;
  };
};

const CityPage = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const getWeather = async () => {
      const { lat, lng } = getSearchLatLong(location.search);

      const url = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lng}`;
      const result = await axios.get(url);

      setWeatherData(result.data.data[0]);
    };
    if (!weatherData) getWeather();
  }, []);

  return (
    <Container>
      <NavBar />
      <ViewContainer>
        {weatherData ? (
          <>
            <h1>
              {weatherData.city_name}{' '}
              <img
                src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
              />
            </h1>
            <ul>
              <li>
                <Thermometer /> {weatherData.temp}° (feels like{' '}
                {weatherData.app_temp}°)
              </li>
              <li>
                <Wind /> {weatherData.wind_spd}m/s {weatherData.wind_cdir}
              </li>
            </ul>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ViewContainer>
    </Container>
  );
};
export default CityPage;
