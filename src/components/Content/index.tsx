import { useEffect, useState } from 'react';
import useDragon from '../../hooks/useDragon';
import { Container } from './styles';




const Content: React.FC = () => {
  const [dragons, setDragons] = useState('');
  const {listDragons} = useDragon();

  useEffect(() => {
    const getData = async (): Promise<


  }, [])


  return (
    <Container>
      {/* <ul>    
         {dragons.map( dragon => {
           <DragonItem key={dragon.id} dragon={dragon}  />
         } )}

      </ul> */}
    </Container>
  );
};

export default Content;
