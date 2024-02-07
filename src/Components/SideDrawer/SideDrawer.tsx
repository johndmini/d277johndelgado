import { useState } from 'react';
import { Button, Drawer, Box, Typography } from '@mui/material';
import { FunFact } from '@/assets/FunFactsDrawer/FunFacts';
import {
  AlbanySource,
  BuffaloSource,
  WatertownSource,
  NewYorkStateSource,
} from '../../assets/Source/source';
import '../../Css/selectiveCss.css';

const SideDrawer = (props: FunFact) => {
  const { funFact, title } = props;
  const [open, setOpen] = useState(false);

  const handleSourceLink = (url?: string) => {
    window.open(url, '_blank');
  };
  return (
    <Box id="sideDrawer">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Fun Fact about {title} {title === 'New York' ? 'State' : ''}
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#3f51b5',
            color: 'primary.contrastText',
            p: 2,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
            Fun Fact
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
            {funFact}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#3f51b5',
            color: 'primary.contrastText',
            p: 2,
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 5 }}>
            Source
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
            {title === 'Albany' ? (
              <Button
                onClick={() => handleSourceLink(AlbanySource.funFactLink)}
                variant="contained"
              >
                {AlbanySource.source}
              </Button>
            ) : title === 'Buffalo' ? (
              <Button
                onClick={() => handleSourceLink(BuffaloSource.funFactLink)}
                variant="contained"
              >
                {BuffaloSource.source}
              </Button>
            ) : title === 'Watertown' ? (
              <Button
                onClick={() => handleSourceLink(WatertownSource.funFactLink)}
                variant="contained"
              >
                {WatertownSource.source}
              </Button>
            ) : title === 'New York' ? (
              <Button
                onClick={() => handleSourceLink(NewYorkStateSource.funFactLink)}
                variant="contained"
              >
                {NewYorkStateSource.source}
              </Button>
            ) : (
              ''
            )}
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
