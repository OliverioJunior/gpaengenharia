import { Header as StyledHeader, List } from './styles';
import * as Prismic from '@prismicio/client';

import logo from '../../assets/logo1.svg';
import { useEffect, useState } from 'react';

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
        <a href="#">
          <img src={logo} alt="logo" />
          <span>G.P.A</span>
        </a>
      </div>
      {/*colocar nav */}

      {header.map(items => {
        return (
          <List key={items.id}>
            <li>
              <a href="#"> {items.home} </a>
            </li>
            <li>
              <a href="#vantagens"> {items.about} </a>
            </li>
            <li>
              <a href="#grafico"> {items.grafic} </a>
            </li>
            <li>
              <a href="#contato"> {items.contact} </a>
            </li>
            <li id="cadastro">
              <a href="/LoginOrSingIn"> {items.login} </a>
            </li>
          </List>
        );
      })}
    </StyledHeader>
  );
};
