import ProjectTheme from './Theme/theme';
import NavBar from './Components/NavBar/NavBar';
import newYorkSeal from './assets/Img/newYorkSeal.png';
import { Box } from '@mui/material';

function App() {
  return (
    <ProjectTheme>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          m: 1.5,
          position: 'relative',
        }}
      >
        <Box
         sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.1,
          pointerEvents: 'none',
          backgroundImage: `url(${newYorkSeal})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
         }}>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            m: 1.5,
          }}
        >
          <NavBar />
        </Box>
      </Box>
    </ProjectTheme>
  );
}

export default App;
