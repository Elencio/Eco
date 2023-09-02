import { GrDiamond } from 'react-icons/gr'
import { BiPencil } from 'react-icons/bi'
import { Sobre } from './styles'

export function SobreLinkedIn() {
  return (
    <Sobre>
      <div id="SobreHeader">
        <strong>Sobre</strong>
        <BiPencil size={32} />
      </div>

      <p>
        Design é a concepção e elaboração de um projeto. Aprenda tudo sobre essa
        área do conhecimento e descubra uma solução para criar artes gráficas de
        maneira rápida e gratuita.De todos os termos estrangeiros adotados na
        língua portuguesa, “design” é um dos que mais causam confusão. No
        entanto, você se depara com essa palavra o tempo todo: na gráfica, no
        escritório, no salão de beleza e até em casa...
      </p>

      <div id="content">
        <GrDiamond />
        <div>
          <strong>Principais Competências</strong>
          <div id="options">
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Criatividade</span>
          </div>
        </div>
      </div>
    </Sobre>
  )
}
