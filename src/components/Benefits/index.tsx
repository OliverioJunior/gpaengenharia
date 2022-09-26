import { Container, ContainerImg, ContainerSection } from './styles';
import * as Prismic from '@prismicio/client';
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from 'react';
import { AuthContext } from '../../providers/auth';

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia0');
const client = Prismic.createClient(endpoint);

type BannerTypes = {
  id: string;
  titulo: string;
  description: string;
  img: string | undefined;
};

export const Benefits: React.FC = () => {
  const [banner, setBanner] = useState<BannerTypes[]>([]);
  const { setOffSetAbout } = useContext(AuthContext);
  const aboutRef = useRef<HTMLTableSectionElement>(null) ?? false;
  useEffect(() => {
    async function fechData() {
      const result = await client.getAllByType('benefits');

      const resultFormated = result.map(item => {
        return {
          id: item.id,
          titulo: item.data.titulo[0].text,
          description: item.data.description,
          img: item.data.img ? item.data.img.url : undefined,
        };
      });
      setBanner(resultFormated);
    }
    fechData();
  }, []);
  useLayoutEffect(() => {
    const about = aboutRef.current;
    console.log(about?.offsetTop);
    if (about && about.offsetTop) setOffSetAbout(about.offsetTop);
  }, [aboutRef, setOffSetAbout]);
  return (
    <>
      <Container ref={aboutRef}>
        <ContainerSection>
          {banner.map(item => {
            return (
              <section key={item.id}>
                <h3>{item.titulo}</h3>
                <p>{item.description}</p>
              </section>
            );
          })}
        </ContainerSection>
        <ContainerImg>
          {banner.map(item => {
            if (item.img) {
              return <img key={item.img} src={item.img} loading="lazy" />;
            }
          })}
        </ContainerImg>
      </Container>
      <hr />
    </>
  );
};
