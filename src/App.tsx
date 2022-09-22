import { Banner } from './components/Banner';
import { Benefits } from './components/Benefits';
import { Graphics } from './components/Graphics';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Graphics />
      <GlobalStyle />
    </>
  );
};

export default App;
