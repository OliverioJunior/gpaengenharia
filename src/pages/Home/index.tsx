import { Banner } from '../../components/Banner';
import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Graphics } from '../../components/Graphics';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Graphics />
      <Contact />
      <Footer />
    </>
  );
};
