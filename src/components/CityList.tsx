import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import { BrightnessHigh } from 'react-bootstrap-icons';

type City = { name: string; lat: string; lng: string };
type CityListProps = {
  cities: Array<City>;
};

const CityList = (props: CityListProps) => {
  const onCityClick = (city: City) => {
    console.log(city);
  };

  return (
    <ListGroup>
      {props.cities.map((city) => (
        <ListGroup.Item
          key={city.name}
          action
          onClick={() => onCityClick(city)}
        >
          <h4>{city.name}</h4>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;
