import React, { useState } from 'react';
import styled from 'styled-components';
import { useKeenSlider } from "keen-slider/react"
import * as Dialog from '@radix-ui/react-dialog'
import Image3 from "../../assets/1.png"
import "keen-slider/keen-slider.min.css"


const BodyWrapper = styled.div`
  min-height: 100vh; /* Define a altura mínima para ocupar toda a viewport */
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
const Header = styled.header`
  padding: 20px;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;


const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const ContentAbout = styled.div`
  padding: 2.5rem 18rem;
  text-align: center;
  width: 100%;
  max-width: 180;
  margin: 0 auto;



   span {
    font-size: 20px;
  font-weight: 400;
  line-height: 160%;
   }



h1 {
  color: #333; 
  text-align: center; 
}
`;


const Content = styled.div`
  margin: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 180;
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;


  strong {
    font-size: 24px;
    font-weight: 500;
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center; 
  width: 400px;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  min-width: 350px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  position: relative; 
  transition: transform 0.2s ease; 
`;

const CardContent = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0; 
  transition: opacity 0.2s ease;
  ${Card}:hover & {
    opacity: 1; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
`;


const Div = styled.div`
   display: flex;
   flex-direction: row;
   gap: 1rem;
   align-items: center;
   justify-content: center;
`;

const KeenSliderOptions = styled.div`
margin-top: 4rem;
  display: flex;
  max-width: 1000px;
  // Espaçamento entre as tags (ajuste conforme necessário)

  .keen-slider__slide {
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .keen-slider__slide.active {
    background-color: #ff5a5f;
    color: #fff;
  }
`;



const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

const ModalContent = styled(Dialog.Content)`
position: fixed;
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;

min-width: 32rem;
border-radius: 6px;
padding: 2.5rem 3rem;


background: ${(props) => props.theme['gray-800']};

top: 50%;
left: 50%;
transform: translate(-50%, -50%); 
  
`;

const ModalImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: flex-end;
  grid-gap: 20px;
  margin-bottom: 4rem;

`;

const Image1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  width: 520px;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
  }
`;

const Image2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  width: 520px;
  position: relative;

  img {
  width: 100%;
  height: 580px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  }
`;

const ImageTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 1; 
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const CustomImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  position: relative; 
`;

const ContentSpan = styled.span`
  
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
 

  span {
    font-size: 18px;
  font-weight: 500;
  line-height: 200%;
  color: #111111;
  }

  button {
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  }
`;

const ImageDiv = styled.div`
padding: 4rem;
background-color: #3AB09E;
max-width: 1180px;
display: flex;
width: 100%;
margin: 0 auto;
border-radius: 8px;
margin-top: 3rem;
display: flex;
flex-direction: row;
gap: 2rem;
align-items: center;
`;

export const Title = styled(Dialog.Title)``





function Gap() {
  const [images, setImages] = useState([
    {
      url: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 0,
      description: 'Blog Pessoal Funcional',
    },
    {
      url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 0,
      description: 'E-Commerce',
    },
    {
      url: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 0,
      description: 'Todo List (Task)',
    },
    // Add more image URLs and descriptions as needed
  ]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 20,
    },
    loop: true,
    created(slider) {
      let timeout: number;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 1000);
      }

      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = false;
          clearNextTimeout();
        });

        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });

        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalDescription, setModalDescription] = useState('');



  const handleImageClick = (imageUrl: React.SetStateAction<string>, description: string) => {
    setModalImage(imageUrl);
    setModalDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BodyWrapper>
      <Header>
        <Logo>Frontstack</Logo>
      </Header>
      <ContentAbout>
        <span>
          Criar um ecossistema inclusivo e acessível, onde juniores talentosos possam desenvolver suas habilidades profissionais por meio de desafios estimulantes. Nosso objetivo é fornecer desafios relevantes e acessíveis que permitam um salto significativo no conhecimento e nas habilidades dos participantes.
        </span>
      </ContentAbout>
      <ImageContainer>
        <div>
          <Image1>
            <CustomImage src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <ImageTextOverlay>Crescimento Pessoal e Profissional</ImageTextOverlay>
          </Image1>

          <Image1>
            <CustomImage src="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <ImageTextOverlay>Trabalho em Equipe</ImageTextOverlay>
          </Image1>
        </div>

        <Image2>
          <CustomImage src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <ImageTextOverlay>Produtividade e Mercado de Trabalho</ImageTextOverlay>
        </Image2>

      </ImageContainer>

      <Content>
        <strong>Melhore seus conhecimentos atraves da pratica saindo de Junior</strong>
        <Div>
          <Button>Participar da Startup</Button>
          <Button>Ver desafio da semana
          </Button>
        </Div>

      </Content>

      <Container>
        {images.map((image, index) => (
          <Card key={index}>

            <Dialog.Root>
               <Dialog.Trigger asChild>
               <Image
               src={image.url}
               alt={`Image ${index + 1}`}
              //  onClick={() => handleImageClick(image.url, image.description)}
            />
               </Dialog.Trigger>

               <ModalOverlay />
                  <ModalContent>
                      <ModalImage>
                          <Title>{modalDescription}</Title>
                      </ModalImage>
                  </ModalContent>
               </Dialog.Root>

            

            <CardContent>
              <p>{image.description}</p>
            </CardContent>
          </Card>
        ))}


      </Container>

      <Button>Galeria de Projectos</Button>

      



      <KeenSliderOptions ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">FRontend</div>
        <div className="keen-slider__slide number-slide2">Backend</div>
        <div className="keen-slider__slide number-slide3">WEb Design</div>
        <div className="keen-slider__slide number-slide4">Figma</div>
        <div className="keen-slider__slide number-slide5">Data Science</div>
        <div className="keen-slider__slide number-slide6">DeveOps</div>
        <div className="keen-slider__slide number-slide6">Criatividade</div>
        <div className="keen-slider__slide number-slide6">Codigo Limpo</div>
      </KeenSliderOptions>

      <ImageDiv>
        <img src={Image3} alt="" />
        <ContentSpan>
          <span>
            A colaboração é a chave para o sucesso. Compartilhe suas ideias, aprendizados e desafios, e juntos enfrentaremos qualquer obstáculo que surgir no caminho. Acreditamos que cada experiência é uma oportunidade de aprendizado e crescimento, e estamos prontos para apoiá-lo em cada passo da sua jornada.
          </span>

          <button>
            Saber mais
          </button>

        </ContentSpan>
      </ImageDiv>

    </BodyWrapper>
  );
}

export default Gap;