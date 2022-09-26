import { Container, ContainerContacts, ContainerImg } from './styles';
import engenharia2 from '../../assets/engenharia2.png';
import * as Prismic from '@prismicio/client';
import { useState, useEffect } from 'react';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type ContactTypes = {
  instagram: string;
  whatsapp: string;
  id: string;
  contato: string;
  email: string;
  img: string;
};

export const Contact: React.FC = () => {
  const [contact, setContact] = useState<ContactTypes[]>([]);

  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('contato');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          titulo: item.data.text,
          contato: item.data.contato[0].text,
          email: item.data.email[0].text,
          img: item.data.img.url,
          instagram: item.data.instagram[0].text,
          whatsapp: item.data.whatsapp[0].text,
        };
      });
      setContact(resultFormated);
    }
    fechData();
  }, []);
  return (
    <Container>
      <ContainerContacts>
        {contact.map(item => {
          return (
            <div key={item.id}>
              <h4>{item.contato}</h4>
              <ul>
                <li>
                  <a
                    href="mailto:gpa.solucoes.engenharia@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=552120069891"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.whatsapp}
                  </a>
                </li>
                <li>
                  <a target="_blank"> {item.instagram}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </ContainerContacts>
      <ContainerImg>
        {contact.map(item => (
          <img key={item.img} src={item.img} />
        ))}
      </ContainerImg>
    </Container>
  );
};
