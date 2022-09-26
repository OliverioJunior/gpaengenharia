import { Container } from './styles';
import { useEffect, useState } from 'react';
import * as Prismic from '@prismicio/client';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type BannerTypes = {
  id: string;
  titulo: string;
  subtitulo: string;
};
export const Banner: React.FC = () => {
  const [banner, setBanner] = useState<BannerTypes[]>([]);

  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('banner');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          titulo: item.data.titulo[0].text,
          subtitulo: item.data.subtitulo[0].text,
        };
      });
      setBanner(resultFormated);
    }
    fechData();
  }, []);

  return (
    <>
      {banner.map(item => {
        return (
          <Container key={item.id}>
            <h1>{item.titulo}</h1>
            <h2>{item.subtitulo}</h2>
          </Container>
        );
      })}
    </>
  );
};
