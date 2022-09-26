import { Container, ContainerContacts, ContainerImg } from './styles';
import engenharia2 from '../../assets/engenharia2.png';
export const Contact: React.FC = () => {
  return (
    <Container>
      <ContainerContacts>
        <div>
          <h4>Contato:</h4>
          <ul>
            <li>
              <a
                href="mailto:gpa.solucoes.engenharia@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                gpa.solucoes.engenharia@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=552120069891"
                target="_blank"
                rel="noreferrer"
              >
                +55(21) 2006-9891
              </a>
            </li>
            <li>
              <a target="_blank">@gbasoluctions</a>
            </li>
          </ul>
        </div>
      </ContainerContacts>
      <ContainerImg>
        <img src={engenharia2} />
      </ContainerImg>
    </Container>
  );
};
