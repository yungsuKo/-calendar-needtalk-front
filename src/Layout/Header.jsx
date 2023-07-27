import { styled } from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 90%;
  margin: 0 auto;
`;
const Logo = styled.div`
  margin: auto 0;
`;
const MenuList = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`;

const List = styled.div`
  text-decoration: none;
  padding-left: 10px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: left;
`;

const Toggle = styled.div`
  width: 50px;
  height: 30px;
  border: 1px solid;
`;
const Header = (props) => {
  return (
    <Nav>
      <Logo>hi</Logo>
      <Menu>
        <MenuList>
          <a href="#">
            <List>Home</List>
          </a>
          <a>
            <List>Availability</List>
          </a>
          <a>
            <List>Integrations</List>
          </a>
          <a>
            <List>Help</List>
          </a>
        </MenuList>
        <Toggle></Toggle>
      </Menu>
    </Nav>
  );
};

export default Header;
