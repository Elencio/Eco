import {Description, Image, SobreContainer, Container} from "./styles"

const About = () => {
  const imageUrl = 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600';
  const description = 'Ser um desenvolvedor júnior não significa falta de capacidade. Na verdade, ser um desenvolvedor júnior é uma fase natural em qualquer carreira de desenvolvimento de software, e é uma oportunidade de aprendizado e crescimento. Entretanto nao significa que nao possa ter um código limpo, superar as expectativas';

  const imageUrl1 = 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600';
  const description1 = 'Em vez de reclamar sobre ser um desenvolvedor júnior, é importante impulsionar a si mesmo e trabalhar em direção ao seu crescimento profissional até atingir o próximo nível. Aqui estão algumas dicas para se fortalecer como desenvolvedor';

  return (
    <>
    <SobreContainer>
      <Image src={imageUrl} alt="Imagem" />
      <Description>{description}</Description>
    </SobreContainer>

    <Container>
      <Image src={imageUrl1} alt="Imagem" />
      <Description>{description1}</Description>
    </Container>
    </>
    
  );
};

export default About;




