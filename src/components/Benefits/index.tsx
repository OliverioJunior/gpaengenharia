import { Container } from './styles';
import gestao from '../../assets/gestao.png';

interface Benefits{
  id: string;
  title: string;
  description: string;
  subtitle: string;
  subdescription: string;
}

export function Benefits( {id,title, description,subtitle,subdescription}: Benefits) {
  
  return (
    <Container>
      <div>
        <div>
          <section>
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <h3>{subtitle}</h3>
            <p>
              {subdescription}
            </p>
          </section>
        </div>
        <div>
          <img src={gestao} />
        </div>
      </div>
    </Container>
  );
};
