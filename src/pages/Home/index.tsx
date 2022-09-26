import { Banner } from '../../components/Banner';
import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Graphics } from '../../components/Graphics';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/';
import { AuthProvider } from '../../providers/auth';

export const Home: React.FC = () => {
  return (
    <AuthProvider>
      <Header />
      <Banner />
      <Benefits />
      <Graphics />
      <Contact />
      <Footer />
    </AuthProvider>
  );
};
