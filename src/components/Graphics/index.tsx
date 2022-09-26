import { Container, ContainerImg } from './styles';
import grafico from '../../assets/grafico.png';
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from 'react';
import * as Prismic from '@prismicio/client';
import { AuthContext } from '../../providers/auth';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type GraphicTypes = {
  id: string;
  titulo: string;
  paragraph: string;
  description: string;
};
export const Graphics: React.FC = () => {
  const [grafics, setGrafics] = useState<GraphicTypes[]>([]);
  const { setoffSetGrafic } = useContext(AuthContext);
  const graficRef = useRef<HTMLDivElement>(null) ?? false;

  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('graphics');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          titulo: item.data.title[0].text,
          paragraph: item.data.paragraph,
          description: item.data.description,
        };
      });
      setGrafics(resultFormated);
    }
    fechData();
  }, []);
  useLayoutEffect(() => {
    const grafic = graficRef.current as HTMLDivElement;
    setoffSetGrafic(grafic.offsetTop);
  }, [graficRef, setoffSetGrafic]);

  return (
    <Container ref={graficRef}>
      <ContainerImg>
        <img src={grafico} loading="lazy" />
      </ContainerImg>
      {grafics.map(item => {
        return (
          <section key={item.id}>
            <h3>{item.titulo}</h3>
            <p>{item.paragraph}</p>
            <p>{item.description}</p>
          </section>
        );
      })}
    </Container>
  );
};
