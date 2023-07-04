import { HeaderContainer, Nav, NavItem } from "./styles"
import Logo from "../assets/Logo.svg"


const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <Nav>
        <NavItem to="/Sobre">Sobre</NavItem>
        <span>Assinar Newsletter</span>
      </Nav>

    </HeaderContainer>
  );
};

export default Header;
