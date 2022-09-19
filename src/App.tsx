import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':id' element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
