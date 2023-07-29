import styled from 'styled-components';
import logo from '../../assets/imgs/logo_img.png';
import { NavLink, Navigate } from 'react-router-dom';
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
  Button,
} from '../HeaderStyle.Component';
import { useEffect, useRef, useState } from 'react';
import useDetectHanlder from '../../hooks/useDetectClose';
import Dropdown from '../components/Dropdown';

const Header = (props) => {
  const [isOpen, myPageRef, mypageHandler] = useDetectHanlder(false);

  return (
    <Nav>
      <HeaderContainer>
        <a href="/">
          <Logo src={logo}></Logo>
        </a>
        {props.isLogin ? (
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
        ) : (
          <>
            <Menu>
              <MenuList>
                <MenuNavLink to="/p" activeClassName="active">
                  <List>Products</List>
                </MenuNavLink>
                <MenuNavLink to="/s" activeClassName="active">
                  <List>Solutions</List>
                </MenuNavLink>
                <MenuNavLink to="/t" activeClassName="active">
                  <List>Teams</List>
                </MenuNavLink>
                <MenuNavLink to="/pricing" activeClassName="active">
                  <List>Pricing</List>
                </MenuNavLink>
                <MenuNavLink to="/resouces" activeClassName="active">
                  <List>Resources</List>
                </MenuNavLink>
              </MenuList>
            </Menu>
            <Button onClick={() => (window.location.href = '/signup')}>
              Sign up
            </Button>
          </>
        )}
      </HeaderContainer>
    </Nav>
  );
};

export default Header;
