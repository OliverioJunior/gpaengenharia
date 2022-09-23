import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
