import NavBar from '../components/NavBar';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const ViewContainer = styled(Container)`
  margin-top: 20px;
`;

const CityPage = () => {
  return (
    <Container>
      <NavBar />
      <ViewContainer>
        <h1>City Page</h1>
      </ViewContainer>
    </Container>
  );
};
export default CityPage;
