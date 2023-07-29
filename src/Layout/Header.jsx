import styled from 'styled-components';
import logo from '../assets/imgs/logo_img.png';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  HeaderContainer,
  Logo,
  Menu,
  MenuList,
  List,
  MenuNavLink,
  Account,
  AccountDropdown,
} from './HeaderStyle.Component';
import { useEffect, useRef, useState } from 'react';
import useDetectHanlder from '../hooks/useDetectClose';
import Dropdown from './components/Dropdown';

const Header = (props) => {
  const [isOpen, myPageRef, mypageHandler] = useDetectHanlder(false);

  return (
    <Nav>
      <HeaderContainer>
        <Logo src={logo}></Logo>
        <Menu>
          <MenuList>
            <MenuNavLink to="/" activeClassName="active">
              <List>Home</List>
            </MenuNavLink>
            <MenuNavLink to="/availability" activeClassName="active">
              <List>Availability</List>
            </MenuNavLink>
            <MenuNavLink to="/integration" activeClassName="active">
              <List>Integrations</List>
            </MenuNavLink>
            <MenuNavLink to="/help" activeClassName="active">
              <List>Help</List>
            </MenuNavLink>
          </MenuList>
          <Account>
            <List onClick={mypageHandler} ref={myPageRef}>
              Account{isOpen ? '🔺' : '🔻'}
            </List>
            <AccountDropdown isDropped={isOpen}></AccountDropdown>
          </Account>
        </Menu>
      </HeaderContainer>
    </Nav>
  );
};

export default Header;
