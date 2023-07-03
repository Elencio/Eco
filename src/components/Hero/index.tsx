import FrontendTechs from "../Tech";
import {Card, CardContainer, CardDescription, CardTitle,ComponentContainer, Description, Title, Technologies, Technology, ContainerText} from "./styles"

import {BsArrowRight} from "react-icons/bs"

const Component = () => {

  const technologies = ["Css", "Typescript", "HTML"];
  return (
    <ComponentContainer>
      <ContainerText>
      <Title>Take a brief and Code</Title>
      <Description>
        Bem-vindo ao nosso site de projetos de frontend! Aqui, você encontrará uma variedade de projetos voltados para o desenvolvimento web, onde você poderá explorar e aprimorar suas habilidades em frontend. Nossa plataforma oferece uma coleção diversificada de projetos, desde páginas de destino e interfaces de usuário interativas até aplicações web completas
      </Description>
      </ContainerText>
        <FrontendTechs />
      <CardContainer>
       
        <Card>
          <CardTitle>Página de Destino Responsiva</CardTitle>
          <CardDescription> Desenvolva uma página de destino responsiva que promova um produto ou serviço específico</CardDescription>
          <Technologies>
        {technologies.map((technology, index) => (
          <Technology key={index}>{technology}</Technology>
        ))}
      </Technologies>
      <span>Concluído</span>
      <img src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Card>
        <Card>
          <CardTitle>Aplicativo de Clima</CardTitle>
          <CardDescription>Crie um aplicativo de clima que exiba informações em tempo real sobre as condições climáticas.</CardDescription>
          <Technologies>
        {technologies.map((technology, index) => (
          <Technology key={index}>{technology}</Technology>
        ))}
      </Technologies>
      <span>Concluído</span>
      <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Card>
        <Card>
          <CardTitle>Site de Receitas Culinárias</CardTitle>
          <CardDescription>Desenvolva um site de receitas culinárias, onde os usuários possam descobrir e compartilhar suas receitas favoritas</CardDescription>
          <Technologies>
        {technologies.map((technology, index) => (
          <Technology key={index}>{technology}</Technology>
        ))}
      </Technologies>
       <span>Concluído</span>
       <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Card>
      </CardContainer>
      <strong>
        Ver mais 
        <BsArrowRight size={20}/>
      </strong>
    </ComponentContainer>
  );
};

export default Component;
