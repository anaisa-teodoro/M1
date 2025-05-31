
import { ThemeProviderWrapper } from './Theme/ThemeProviderWrapper';
import { PlantStore } from './Pages/PlantStore';
import { CssBaseline } from '@mui/material';

export const App = () => (
  <ThemeProviderWrapper>
    <CssBaseline /> 
    
    <PlantStore />
     
  </ThemeProviderWrapper>
);

export default App;
