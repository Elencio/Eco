import {FooterContainer, FooterLink, FooterText} from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} FrontStack. Todos os direitos reservados. Desenvolvido por{' '}
        <FooterLink >Elencio Zivane</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
