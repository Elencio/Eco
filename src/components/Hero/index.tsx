import { Card, CardContainer, CardDescription, CardTitle, ComponentContainer, Description, Title, Technologies, Technology, ContainerText } from "./styles"


const Component = () => {

  const technologies = ["Css", "Typescript", "HTML"];
  return (
    <ComponentContainer>
      <ContainerText>
        <Title>Take a brief and Code</Title>
        <Description>
          Bem-vindo ao nosso site de projetos de frontend! Aqui, você encontrará uma variedade de projetos voltados para o desenvolvimento web, onde você poderá explorar e aprimorar suas habilidades em frontend. 
        </Description>

        <span>
          Elencio Calado e o meu nome, e sou um desenvolvedor Junior, que busca a primorar mais as minhas capacidades como desenvolver, um dos meus passatempos e imaginar. Se tiver alguma ideia ou comentário, o faca no LinkedIn page.
        </span>

        <button>Ir</button>
      </ContainerText>
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

      </CardContainer>
    </ComponentContainer>
  );
};

export default Component;
