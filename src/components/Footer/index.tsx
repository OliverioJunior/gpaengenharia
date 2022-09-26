import { Container } from './styles';
import logo from '../../assets/logo1.svg';
export const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="empresa" />
        <span>G.P.A</span>
      </div>
      <hr />
      <ul>
        <li>Home</li>
        <li>Vantagens</li>
        <li>Gráficos</li>
        <li>Contato</li>
      </ul>
    </Container>
  );
};
