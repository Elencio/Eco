import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1400px;
  width: 900px;
  margin: 1rem auto;
`;



const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 15px;
  color: #c4c4c4;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.2rem;
`;

export { HeaderContainer, NavItem };
