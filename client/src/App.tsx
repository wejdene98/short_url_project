import Background from './components/Background';
import URLShortenerForm from './components/URLShortenerForm';
import { Box } from '@chakra-ui/react';
function App() {
  return (

    <Box
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    >

  
      <URLShortenerForm/>
      <Background/>
      </Box>
  );
}

export default App;
