import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ThemeProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    background: {
      default: '#C6C6C6',
    },
    primary: {
      main: '#2C2D2C',
    },
    secondary: {
      main: '#4ADEDE',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

const ProjectTheme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ProjectTheme;
