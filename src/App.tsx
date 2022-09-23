import { Banner } from './components/Banner';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
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
      <Contact />
      <GlobalStyle />
    </>
  );
};

export default App;
