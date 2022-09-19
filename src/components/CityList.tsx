import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

type City = { name: string; lat: string; lng: string };
type CityListProps = {
  cities: Array<City>;
};

const CityList = (props: CityListProps) => {
  return (
    <ListGroup>
      {props.cities.map((city) => (
        <ListGroup.Item key={city.name} action>
          <Link to={`/city?lat=${city.lat}&lng=${city.lng}`}>{city.name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;
