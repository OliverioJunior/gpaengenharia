import { Container } from './styles';
import gestao from '../../assets/gestao.png';
export const Benefits: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <section>
            <h3>Vantagens de uma boa gestão de obra</h3>
            <p>
              O Departamento de Construção Civil da Escola Politécnica da USP,
              destacou em recente pesquisa que as perdas de materiais em uma
              obra chegam a 8%. Esse percentual é ainda maior se considerarmos
              as perdas financeiras, que envolvem inclusive custos de
              retrabalho, chegando a 30%.
            </p>
          </section>
          <section>
            <h3>Gastos extras:</h3>
            <p>
              As empresas de construção civil calculam sempre um valor extra no
              orçamento da obra justamente devido aos desperdícios que acontecem
              ao longo da execução do projeto
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
