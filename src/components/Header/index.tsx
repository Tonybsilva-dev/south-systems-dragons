import { AreaLogin, ButtonLogin, Container } from './styles';

function Header() {
  return (
    <Container>
      <h1>Header</h1>
      <AreaLogin>
        <ButtonLogin>Login</ButtonLogin>
      </AreaLogin>
    </Container>
  );
};

export default Header;
