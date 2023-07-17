import { HeaderContainer, NavItem } from "./styles"
import Logo from "../assets/Logo.png"


const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" width='40px' />
        <NavItem to="/Sobre">Sobre</NavItem>
    </HeaderContainer>
  );
};

export default Header;
