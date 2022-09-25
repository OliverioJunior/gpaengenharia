import {
  ButtonCreate,
  ButtonGoogle,
  Container,
  ContainerInput,
  Form,
  Logo,
  WrapperLogo,
} from './styles';
import gmail from '../../assets/gmail.png';
import logo from '../../assets/logo.png';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { auth } from '../../services/firebase';
import { FormEvent, useCallback, useRef } from 'react';

export const LoginOrSingIn: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null) ?? false;
  const emailRef = useRef<HTMLInputElement>(null) ?? false;
  const passRef = useRef<HTMLInputElement>(null) ?? false;
  const passConfirmRef = useRef<HTMLInputElement>(null) ?? false;
  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        window.location.href = '/';
      });
  }
  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const email = emailRef.current?.value;
      const pass = passRef.current?.value;
      console.log(emailRef.current?.value);
      if (email && pass) {
        handleEmailSignIn(email, pass);
      }
    },

    [emailRef, passRef],
  );
  async function handleEmailSignIn(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <Container>
      <WrapperLogo>
        <Logo>GPA</Logo>
        <img src={logo} alt="logo" />
      </WrapperLogo>

      <Form onSubmit={onSubmit}>
        <ContainerInput hasErro>
          <input
            ref={nameRef}
            type="text"
            min={3}
            required
            placeholder="Nome"
          />
        </ContainerInput>
        <ContainerInput hasErro>
          <input ref={emailRef} type="email" required placeholder="Email" />
        </ContainerInput>
        <ContainerInput hasErro>
          <input ref={passRef} type="password" required placeholder="Senha" />
        </ContainerInput>
        <ContainerInput hasErro>
          <input
            ref={passConfirmRef}
            type="password"
            required
            placeholder="Confirme sua senha"
          />
        </ContainerInput>
        <ButtonCreate type="submit">Criar Conta</ButtonCreate>
        <ButtonGoogle type="button" onClick={handleGoogleSignIn}>
          <img src={gmail} alt="gmail" />
          entrar com a conta google
        </ButtonGoogle>
      </Form>
    </Container>
  );
};
