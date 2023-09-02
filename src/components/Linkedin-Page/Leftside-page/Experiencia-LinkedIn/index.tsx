import { SiAdobe } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { Experiencia } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

export function ExperienciaLinkedIn() {
  return (
    <Experiencia>
      <div id="Experience-Header">
        <strong id="title-header">Experiencia</strong>

        <div id="options">
          <AiOutlinePlus size={32} />
          <BiPencil size={32} />
        </div>
      </div>

      <div id="experiences">
        <div id="experience-01">
          <FcGoogle size={62} />
          <div id="descriptions">
            <h2>Designer UX/UI</h2>
            <strong>Google @ tempo integral</strong>
            <span>Maio de 2018 - o momento - 4 anos e 8 meses</span>
            <span>Estrasburgo, Franca</span>
            <p>
              Trabalhando na area de Frontend no Projeto de iniciação
              Científica, com foco no desenvolvimento de interfaces do usuário
              utilizando o framework React. Nessa posição, sou responsável por
              criar experiências interativas e responsivas, desenvolver
              componentes reutilizáveis e aplicar as melhores práticas de design
              e usabilidade.
            </p>

            <strong id="title">Competências:</strong>
            <p>
              Usabilidade · Vite · Figma · React · Styled-components ·
              Ant-design · Computação gráfica · Cleancode · Git · Estruturas de
              dados · Trabalho em equipe · TypeScript · GitHub
            </p>
          </div>
        </div>
        <div id="experience-02">
          <SiAdobe size={42} />
          <div id="descriptions">
            <h2>Designer UX/UI junior</h2>
            <strong>Adobe Reader @ tempo integral</strong>
            <span>Agosto de 2016 - 2018 - 2 anos</span>
            <span>Florença, Italia</span>

            <p>
              Realizar desafios que buscam aprimorar as capacidades de
              desenvolvedor frontend. Criação de logos ,conteúdo voltado a
              desenvolvedores juniores e designs no figma. Incentivar a
              programação limpa e as boas práticas.
            </p>

            <strong>Competências:</strong>
            <p>
              Usabilidade · Vite · Figma · React · Styled-components ·
              Ant-design · Computação gráfica · Cleancode · Git · Estruturas de
              dados · Trabalho em equipe · TypeScript · GitHub
            </p>
          </div>
        </div>
      </div>
    </Experiencia>
  )
}
