import { Banner } from '../../components/Banner';
import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Graphics } from '../../components/Graphics';
import { Header } from '../../components/Header';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Graphics />
      <Contact />
    </>
  );
};
