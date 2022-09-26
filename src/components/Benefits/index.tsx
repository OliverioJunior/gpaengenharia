import { Container, ContainerImg } from './styles';
import gestao from '../../assets/gestao.png';
import * as Prismic from '@prismicio/client';
import { useState, useEffect } from 'react';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type BannerTypes = {
  id: string;
  titulo: string;
  description: string;
};

export const Benefits: React.FC = () => {
  const [banner, setBanner] = useState<BannerTypes[]>([]);
  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('benefits');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          titulo: item.data.titulo[0].text,
          description: item.data.description,
        };
      });
      setBanner(resultFormated);
    }
    fechData();
  }, []);

  return (
    <>
      <Container>
        <div>
          {banner.map(item => {
            return (
              <section key={item.id}>
                <h3>{item.titulo}</h3>
                <p>{item.description}</p>
              </section>
            );
          })}
        </div>
        <ContainerImg>
          <img src={gestao} loading="lazy" />
        </ContainerImg>
      </Container>
      <hr />
    </>
  );
};
