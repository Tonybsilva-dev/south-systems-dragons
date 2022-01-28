import { Container, DragonInfo } from './styles';

interface propsDragon {
  dragon: any
}

function DragonItem({ dragon }: any) {
  return (
    <Container>
      <header>
        <img src="#" alt="#" />

        <DragonInfo>
          <strong>{dragon.name}</strong>
          <span>{dragon.type}</span>
        </DragonInfo>
      </header>

      <p>{history}</p>
      <a href="#"> Editar dragao </a>
    </Container>
  );
};

export default DragonItem;
