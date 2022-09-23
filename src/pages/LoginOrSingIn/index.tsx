import { Container, Form, Logo } from './styles';
import logo from '../../assets/logo.png';
export const LoginOrSingIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <h1>G P A</h1>
        <img src={logo} alt="logo" />
      </Logo>

      <Form>Login</Form>
    </Container>
  );
};
