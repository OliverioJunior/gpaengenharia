import { Container } from './style';
import Logo from './logo.png'



export const Footer: React.FC = () => {
  return(
    <Container>
        <div>
          <img src={Logo}/>
          <span> G.P.A </span>
          <hr/>
          <ul>
            <li>Home</li>
            <li>Vantagens</li>
            <li>Gráficos</li>
            <li>Contato</li>
          </ul>

        </div>

    </Container>

  )
}
