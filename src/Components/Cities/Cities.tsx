import { Box, Typography } from '@mui/material';
import {
  Albany,
  Buffalo,
  Watertown,
} from '../../assets/FunFactsDrawer/FunFacts';
import SideDrawer from '../SideDrawer/SideDrawer';
import '../../Css/selectiveCss.css';

interface CitiesProps {
  cityName: string;
  dateOfAdmission: string;
  cityPopulation: number;
  cityRegion: string;
  cityClassification: string;
  averageIncome: number;
  mainBody?: string;
  mainBody2?: string;
  mainBody3?: string;
  cityImage: string;
}

const Cities = (props: CitiesProps) => {
  const {
    cityName,
    dateOfAdmission,
    cityPopulation,
    cityRegion,
    cityClassification,
    averageIncome,
    mainBody,
    mainBody2,
    mainBody3,
    cityImage,
  } = props;

  const handleCityNameCheck = (cityName: string) => {
    switch (cityName) {
      case 'Albany':
        return Albany;
      case 'Buffalo':
        return Buffalo;
      case 'Watertown':
        return Watertown;
      default:
        return Albany;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', m: 1.5, position: 'relative' }}>
      <Box
        sx={{ width: '100%', height: '100vh', m: 1.5, position: 'relative' }}
      >
        <Typography variant="h2" color={'primary.main'} sx={{ mt: 5, ml: 2 }}>
          {cityName}
        </Typography>
        <Box>
          <Typography
            variant="subtitle1"
            color={'primary.main'}
            sx={{ p: 2, width: '75%' }}
          >
            {mainBody}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}
            >
              <Typography
                variant="subtitle1"
                color={'primary.main'}
                sx={{ p: 2, width: '100%' }}
              >
                {mainBody2}
              </Typography>
              <SideDrawer
                funFact={handleCityNameCheck(cityName).funFact}
                title={cityName}
              />
            </Box>
            <img
              src={cityImage}
              alt={cityName}
              style={{ width: '48%', height: 'auto', float: 'right' }}
            />
          </Box>
          <Typography
            variant="subtitle1"
            color={'primary.main'}
            sx={{ p: 2, width: '75%' }}
          >
            {mainBody3}
          </Typography>
          <Box>
            <Typography
              variant="h4"
              color={'primary.main'}
              sx={{ mt: 5, ml: 2 }}
            >
              Facts Summary:
            </Typography>
            <Box>
              <ul className="listItems">
                <li>Date of Admission: {dateOfAdmission}</li>
                <li>Population: {cityPopulation}</li>
                <li>Region: {cityRegion}</li>
                <li>Classification: {cityClassification}</li>
                <li>Average Income: {averageIncome}</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cities;
