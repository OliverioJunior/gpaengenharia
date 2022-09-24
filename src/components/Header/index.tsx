import { Header as StyledHeader, List } from './styles';
import logo from '../../assets/logo1.svg';
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <a href="#">
          <img src={logo} alt="logo" />
          <span>G.P.A</span>
        </a>
      </div>
      {/*colocar nav */}
      <List>
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#vantagens"> Sobre </a>
        </li>
        <li>
          <a href="#grafico"> Gráfico </a>
        </li>
        <li>
          <a href="#contato"> Contato </a>
        </li>

        <li id='cadastro'>
          <a href="/LoginOrSingIn"> Entre ou Cadastre-se </a>
        </li>
      </List>
    </StyledHeader>
  );
};
