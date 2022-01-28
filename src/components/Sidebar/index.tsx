
import React, { useState } from 'react';
import { Container, Form, InputBlock } from './styles';


const Sidebar: React.FC = () => {
  const [nameDragon, setNameDragon] = useState('');
  const [typeDragon, setTypeDragon] = useState('');
  const [historyDragon, setHistoryDragon] = useState('');


  return (
    <Container>
      
      <strong>CADASTRAR</strong>
      <Form>
        <InputBlock>
            <label htmlFor="dragon_name">Nome do dragao</label>
            <input type="text" name="dragon_name" id="dragon_name" required  onChange={ e => setNameDragon(e.target.value)}/>
        </InputBlock>

        <InputBlock>
            <label htmlFor="dragon_name">Tipo do dragao</label>
            <input type="text" name="dragon_type" id="dragon_type" required  onChange={ e => setTypeDragon(e.target.value)}/>
        </InputBlock>

        <InputBlock>
            <label htmlFor="dragon_name">História do dragao</label>
            <textarea name="dragon_history" id="dragon_history" required  onChange={ e => setHistoryDragon(e.target.value)}/>
        </InputBlock>

        <button type="submit">Salvar</button>

      </Form>

    </Container>
  );
};

export default Sidebar;
