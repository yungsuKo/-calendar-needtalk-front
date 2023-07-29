import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Dropdown from './components/Dropdown';

export const Nav = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid gray;
`;
export const Logo = styled.img`
  margin: auto 0;
  width: 30px;
  height: 30px;
`;
export const MenuList = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`;

export const List = styled.div`
  padding-left: 10px;
  font-weight: bold;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: left;
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
  &.active {
    color: blue;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1020px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Account = styled.div`
  position: relative;
  padding: 10px 0px;
`;

export const AccountDropdown = styled(Dropdown)`
  position: absolute;
  z-index: 10;
  top: calc(100% + 4px);
  width: 314px;
  right: 0px;
  min-width: 170px;
  padding: 8px 0px;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: white;
`;
