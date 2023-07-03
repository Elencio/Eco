import { HeaderContainer, NavItem, Navigation, Nav } from "./styles"
import Logo from "../assets/Logo.svg"


const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <Nav>
        <Navigation>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Sobre</NavItem>
          <NavItem href="#">Contato</NavItem>
        </Navigation>
        <span>Assinar Newsletter</span>
      </Nav>

    </HeaderContainer>
  );
};

export default Header;
