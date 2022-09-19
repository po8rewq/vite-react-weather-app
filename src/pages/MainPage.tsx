import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CityList from '../components/CityList';
import useDebounce from '../hooks/useDebounce';
import NavBar from '../components/NavBar';

const ViewContainer = styled(Container)`
  margin-top: 20px;
`;

const MainPage = () => {
  const [searchText, setSearchText] = useState('');
  const [cities, setCities] = useState([]);
  const { debounce } = useDebounce();

  useEffect(() => {
    debounce(callApi, 500);
  }, [searchText]);

  const mapboxApiKey =
    'pk.eyJ1IjoicG84cmV3cSIsImEiOiJXWnRfSjhFIn0.7VGbERGlK_pwQ4wDNfuq9Q';

  const callApi = async () => {
    if (searchText) {
      try {
        const endpoint = 'mapbox.places';
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/${endpoint}/${searchText}.json?access_token=${mapboxApiKey}&types=place`
        );
        setCities(
          result.data.features.map((city: any) => ({
            name: city.place_name,
            lat: city.geometry.coordinates[1],
            lng: city.geometry.coordinates[0],
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <NavBar />
      <ViewContainer>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Search city'
            onChange={(evt) => setSearchText(evt.target.value)}
          />
        </InputGroup>
        <CityList cities={cities} />
      </ViewContainer>
    </Container>
  );
};

export default MainPage;
