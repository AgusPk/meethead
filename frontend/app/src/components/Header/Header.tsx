import React, { FC } from 'react';
import { FixedContainer, Nav, NavContainer } from './styles';
import useScroll from 'hooks/useScroll';
import { Link } from 'react-router-dom';
import { Routes } from 'routes/Routes';

const Header: FC = () => {
  const isFixed = useScroll(50);

  return (
    <FixedContainer>
      <Nav condensed={isFixed}>
        <NavContainer>
          <Link to={Routes.ROOT}></Link>
        </NavContainer>
      </Nav>
    </FixedContainer>
  );
};

export default Header;
