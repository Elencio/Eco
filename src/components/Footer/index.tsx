import {FooterContainer,  FooterText} from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} FrontStack. Todos os direitos reservados. 
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
