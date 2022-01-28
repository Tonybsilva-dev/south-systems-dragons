import { Container, DragonInfo } from './styles';
import logoDragon from '../../assets/images/logo-dragon.jpg'

interface Dragon {
  id: number;
  name: string;
  type: string;
  histories: [];
}

function DragonItem({ dragon }: any) {

  return (
    <Container>
      <header>
        <img src={logoDragon} alt="#" />

        <DragonInfo>
          <strong>{dragon.name}</strong>
          <span>{dragon.type}</span>
        </DragonInfo>
      </header>

      <p>{dragon.histories.length > 0 ? dragon.histories.map((history: string) => '*' + history ) : ''} </p>
      <a href="#"> Editar dragao </a>
    </Container>
  );
};

export default DragonItem;
