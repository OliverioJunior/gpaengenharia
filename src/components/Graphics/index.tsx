import { Container } from './styles';
import grafico from '../../assets/grafico.png';
export const Graphics: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={grafico} />
        </div>
        <section>
          <h3>Taxa Selic</h3>
          <p>
            Como a taxa Selic influencia nos juros de financiamentos e
            empréstimos oferecidos pelos bancos, ela acaba por interferir no
            mercado da construção. Isso porque, com juros mais baixos, se torna
            mais atrativo pedir crédito emprestado para construir ou para
            comprar imóveis.
          </p>
          <span> 
              Sendo assim, é preciso buscar novos meios para
            alavancar o lucro. O problema do desperdício é uma dor na qual
            ignoramos por ninguém ter achado a solução.
          </span>
        </section>
      </div>
    </Container>
  );
};
