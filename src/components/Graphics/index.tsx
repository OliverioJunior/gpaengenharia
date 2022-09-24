import { Container } from './styles';
import grafico from '../../assets/grafico.png';

interface Grafics{
  id: string;
  title: string;
  description: string;
  subdescription: string;
}

export function Graphics( {id,title, description,subdescription}: Grafics){
  return (
    <Container>
      <div>
        <div>
          <img src={grafico} />
        </div>
        <section>
          <h3>{title}</h3>
          <p>
          {description}
          </p>
          <span> 
          {subdescription}
          </span>
        </section>
      </div>
    </Container>
  );
};
