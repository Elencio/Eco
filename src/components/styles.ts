import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1400px;
  width: 900px;
  margin: 1rem auto;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: 700;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }

  img {
    max-width: 50px;
    width: 100%;
   
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  span {
    border: 2px solid #e60023;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #111111;
    font-weight: 500;
    cursor: pointer;
  }

  &:hover {
    color: #fff;
    border-color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 15px;
  color: #c4c4c4;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.2rem;
  
  &:last-child {
    margin-right: 0;
  }
`;

export { HeaderContainer, Logo, Navigation, Nav, NavItem };
