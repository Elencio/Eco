import {TechContainer, TechItem} from "./styles"

const FrontendTechs = () => {
  const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Styled Components', 'Bootstrap',
  'Tailwind CSS', 'Sass'];

  return (
    <TechContainer>
      {techs.map((tech, index) => (
        <TechItem key={index}>
          <span>{tech}</span>
          </TechItem>
      ))}
    </TechContainer>
  );
};

export default FrontendTechs;
