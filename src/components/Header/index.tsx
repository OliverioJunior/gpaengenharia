import { HeadGPA, List } from './styles';
import logo from '../../assets/logo1.svg';
export const Header: React.FC = () => {
  return (
    <>
      <HeadGPA>
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
            G.P.A
          </a>
        </div>

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
        </List>
      </HeadGPA>
    </>
  );
};
