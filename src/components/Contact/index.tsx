import { Container } from './styles';
import engenharia2 from '../../assets/engenharia2.png';
export const Contact: React.FC = () => {
  return (
    <Container>
      <div>
        <section>
          <h4>Contato</h4>
          <form action="#" method="post" encType="multipart/form-data">
            <label>
              <span>
                <i className="icon icon-user-1"></i> Nome
              </span>
              <input type="text" name="nome" />
            </label>

            <label>
              <span>
                <i className="icon icon-email"></i> E-mail
              </span>
              <input type="text" name="email" className="fade_8S" />
            </label>
            <label>
              <span>
                <i className="icon icon-flag"></i> Assunto
              </span>
              <input type="text" name="assunto" />
            </label>

            <label>
              <span>
                <i className="icon icon-comment"></i> Mensagem
              </span>
              <textarea name="mensagem" rows={3} required={true}></textarea>
            </label>

            <input type="hidden" name="acao" value="enviar" />
            <button className="btn-envia" title="Enviar">
              <b className="icon icon-paper-plane-o"> Enviar</b>
            </button>
          </form>
        </section>
        <div>
          <img src={engenharia2} />
        </div>
      </div>
    </Container>
  );
};
