import { Container, ContainerInput, Form, Logo, WrapperLogo } from './styles';
import logo from '../../assets/logo.png';
export const LoginOrSingIn: React.FC = () => {
  const form = [
    {
      id: 1,
      placeholder: 'nome',
      min: 3,
    },
    {
      id: 2,
      placeholder: 'email',
      min: 3,
    },
    {
      id: 3,
      placeholder: 'senha',
      min: 6,
    },
    {
      id: 4,
      placeholder: 'confirmar-senha',
      min: 6,
    },
  ];
  return (
    <Container>
      <WrapperLogo>
        <Logo>GPA</Logo>
        <img src={logo} alt="logo" />
      </WrapperLogo>

      <Form>
        {form.map(item => {
          return (
            <ContainerInput key={item.id}>
              <input
                type="text"
                min={item.min}
                placeholder={item.placeholder}
              />
            </ContainerInput>
          );
        })}
      </Form>
    </Container>
  );
};
