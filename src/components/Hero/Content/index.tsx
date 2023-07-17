import { ContainerText, Button, Description, Title } from './styles'

export function Content(){
  return (
    <ContainerText>
        <Title>Take a brief and Code</Title>
        <Description>
          Bem-vindo ao nosso site de projetos de frontend! Aqui, você encontrará uma variedade de projetos voltados para o desenvolvimento web, onde você poderá explorar e aprimorar suas habilidades em frontend. 
        </Description>

        <span>
          Elêncio Calado é o meu nome, e sou um desenvolvedor Júnior, busco aprimorar mais as minhas capacidades como desenvolver. Um dos meus passatempos é imaginar. Se tiver alguma ideia ou comentário, faça-o no LinkedIn page.
        </span>

        <Button href="https://www.linkedin.com/company/juniorchalenge/?viewAsMember=true">
          Ir
        </Button>


      </ContainerText>
  )
}