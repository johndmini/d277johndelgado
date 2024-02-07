import { newYork } from '../../assets/state';
import { Typography, Box } from '@mui/material';
import newYorkState from '../../assets/Img/newYorkState.png';
import SideDrawer from '../SideDrawer/SideDrawer';
import { NewYorkState } from '../../assets/FunFactsDrawer/FunFacts';
import '../../Css/selectiveCss.css';

const Main = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        m: 2.5,
        position: 'relative',
        pt: 2,
      }}
    >
      <Box>
        <Typography variant="h2" color={'primary.main'} sx={{ mt: 5, ml: 2 }}>
          {newYork.stateName}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          color={'primary.main'}
          sx={{ p: 2, width: '75%' }}
        >
          {newYork.mainBody}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <Typography
              variant="subtitle1"
              color={'primary.main'}
              sx={{ p: 2, width: '100%' }}
            >
              {newYork.mainBody2}
            </Typography>
            <SideDrawer
              funFact={NewYorkState.funFact}
              title={newYork.stateName}
            />
          </Box>
            <img
              src={newYorkState}
              alt="New York"
              style={{ width: '48%', height: 'auto', float: 'right' }}
            />
        </Box>
        <Typography
          variant="subtitle1"
          color={'primary.main'}
          sx={{ p: 2, width: '75%' }}
        >
          {newYork.mainBody3}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" color={'primary.main'} sx={{ mt: 5, ml: 2 }}>
          A few of many cities in New York State
        </Typography>
        <ol className="listItems">
          <li>Albany</li>
          <li>Buffalo</li>
          <li>Watertown</li>
        </ol>
      </Box>
    </Box>
  );
};

export default Main;
