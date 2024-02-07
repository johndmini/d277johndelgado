import { Button, Box, ButtonGroup } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from '../Main/Main';
import Cities from '../Cities/Cities';
import SourceComponent from '../SourceComponent/SourceComponent';
import { City } from '@/Types/City';
import { albany } from '../../assets/albany';
import { buffalo } from '../../assets/buffalo';
import { watertown } from '../../assets/watertown';
import albanyImage from '../../assets/Img/albanyImage.jpeg';
import buffaloImage from '../../assets/Img/buffaloImage.jpeg';
import watertownImage from '../../assets/Img/watertownImage.jpeg';
import { useState } from 'react';

interface CityData extends City {
  cityImage: string;
}

const NavBar = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [currentCity, setCurrentCity] = useState<City>(albany);
  const [currentCityImage, setCurrentCityImage] = useState<string>(albanyImage);
  const [cityData, setCityData] = useState<CityData>({
    cityName: currentCity.cityName,
    dateOfAdmission: currentCity.dateOfAdmission,
    cityPopulation: currentCity.cityPopulation,
    cityRegion: currentCity.cityRegion,
    cityClassification: currentCity.cityClassification,
    averageIncome: currentCity.averageIncome,
    mainBody: currentCity.mainBody,
    mainBody2: currentCity.mainBody2,
    mainBody3: currentCity.mainBody3,
    cityImage: currentCityImage,
  });

  const handleChangeCity = (city: City, cityImage: string, path: string) => {
    setCurrentPath(path);
    setCurrentCity(city);
    setCurrentCityImage(cityImage);
    setCityData({
      cityName: city.cityName,
      dateOfAdmission: city.dateOfAdmission,
      cityPopulation: city.cityPopulation,
      cityRegion: city.cityRegion,
      cityClassification: city.cityClassification,
      averageIncome: city.averageIncome,
      mainBody: city.mainBody,
      mainBody2: city.mainBody2,
      mainBody3: city.mainBody3,
      cityImage: cityImage,
    });
  };

  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Router>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <ButtonGroup
            variant="contained"
            sx={{
              position: 'fixed',
              m: '0 auto',
              top: 10,
              left: '35%',
              zIndex: 100,
            }}
          >
            <Button component={Link} to="/">
              Home
            </Button>
            <Button
              component={Link}
              to="/albany"
              onClick={() => handleChangeCity(albany, albanyImage, '/albany')}
            >
              Albany
            </Button>
            <Button
              component={Link}
              to="/buffalo"
              onClick={() =>
                handleChangeCity(buffalo, buffaloImage, '/buffalo')
              }
            >
              Buffalo
            </Button>
            <Button
              component={Link}
              to="/watertown"
              onClick={() =>
                handleChangeCity(watertown, watertownImage, '/watertown')
              }
            >
              Watertown
            </Button>
            <Button component={Link} to="/source">
              Source
            </Button>
          </ButtonGroup>
        </Box>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={currentPath} element={<Cities {...cityData} />} />
          <Route path="/source" element={<SourceComponent />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default NavBar;
