import { useEffect, useState } from 'react';
import useDragon from '../../hooks/useDragon';
import DragonItem from '../DragonItem';
import { Container } from './styles';




const Content: React.FC = () => {
  const {listDragons, filterDone, dragons} = useDragon();

  useEffect(() => {
    listDragons();
  }, []);

  return (
    <Container>
      <ul>   
        {filterDone && dragons.length > 0 ? 
          dragons.map((dragon: any) => (
            <DragonItem key={dragon.id}  dragon={dragon} />
        ))  : 'Sem dragões a serem exibidos'}
      </ul>
    </Container>
  );
};

export default Content;
