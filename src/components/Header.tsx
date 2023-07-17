import { HeaderContainer, Nav, NavItem } from "./styles"
import Logo from "../assets/Logo.png"


const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <Nav>
        <NavItem to="/Sobre">Sobre</NavItem>
      </Nav>

    </HeaderContainer>
  );
};

export default Header;
