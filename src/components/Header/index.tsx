import { Header as StyledHeader, List } from './styles';
import * as Prismic from '@prismicio/client';

import logo from '../../assets/logo1.svg';
import {
  useEffect,
  useState,
  useRef,
  useContext,
  useLayoutEffect,
} from 'react';
import { AuthContext } from '../../providers/auth';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type HeaderTypes = {
  id: string;
  about: string;
  contact: string;
  grafic: string;
  home: string;
  login: string;
};

export const Header: React.FC = () => {
  const [header, setHeader] = useState<HeaderTypes[]>([]);
  const { offSetAbout, offSetGrafic, offSetContact } = useContext(AuthContext);
  const homeRef = useRef<HTMLAnchorElement>(null) ?? false;
  const aboutRef = useRef<HTMLAnchorElement>(null) ?? false;
  const graficRef = useRef<HTMLAnchorElement>(null) ?? false;
  const contactRef = useRef<HTMLAnchorElement>(null) ?? false;

  useLayoutEffect(() => {
    const home = homeRef.current as HTMLAnchorElement;
    const about = aboutRef.current as HTMLAnchorElement;
    const grafic = graficRef.current as HTMLAnchorElement;
    const contact = contactRef.current as HTMLAnchorElement;
    console.log(offSetAbout, offSetGrafic, offSetContact);
    home?.addEventListener('click', () =>
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      }),
    );
    about?.addEventListener('click', () =>
      window.scrollTo({
        behavior: 'smooth',
        top: offSetAbout,
      }),
    );
    grafic?.addEventListener('click', () =>
      window.scrollTo({
        behavior: 'smooth',
        top: offSetGrafic,
      }),
    );
    contact?.addEventListener('click', () =>
      window.scrollTo({
        behavior: 'smooth',
        top: offSetContact,
      }),
    );
  }, [
    aboutRef,
    contactRef,
    graficRef,
    homeRef,
    offSetAbout,
    offSetGrafic,
    offSetContact,
  ]);
  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('gpaengenharia');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          about: item.data.about,
          contact: item.data.contact,
          grafic: item.data.grafic,
          home: item.data.home,
          login: item.data.login,
        };
      });
      setHeader(resultFormated);
    }
    fechData();
  }, []);

  return (
    <StyledHeader>
      <div>
        <a>
          <img src={logo} alt="logo" />
          <span>G.P.A</span>
        </a>
      </div>

      <nav>
        {header.map(items => {
          return (
            <List key={items.id}>
              <li>
                <a ref={homeRef} href="#home">
                  {items.home}
                </a>
              </li>
              <li>
                <a ref={aboutRef} href="#about">
                  {items.about}
                </a>
              </li>
              <li>
                <a ref={graficRef} href="#grafico">
                  {items.grafic}
                </a>
              </li>
              <li>
                <a ref={contactRef} href="#contato">
                  {items.contact}
                </a>
              </li>
              <li>
                <a href="/LoginOrSingIn"> {items.login} </a>
              </li>
            </List>
          );
        })}
      </nav>
    </StyledHeader>
  );
};
