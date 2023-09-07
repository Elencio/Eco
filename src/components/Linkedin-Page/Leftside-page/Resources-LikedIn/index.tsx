import { RiHotspotFill } from 'react-icons/ri'
import { BsFillPeopleFill, BsArrowRight } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { Resources } from './styles'

export function ResourcesLinkedIn() {
  return (
    <Resources>
      <div id="header">
        <strong id="title">Recursos</strong>
        <span id="item">
          <AiOutlineEye />
          Exibido apenas a voce
        </span>

        <div id="option">
          <div id="info">
            <RiHotspotFill size={32} />
            <div id="info-01">
              <strong>Modo de Criação</strong>
              <span>
                Destaque-se, exiba conteúdos no seu perfil e tenha acesso a
                ferramentas de criação de conteúdo
              </span>
            </div>
          </div>
          <div id="info1">
            <BsFillPeopleFill size={32} color="#333" />
            <div id="info-01">
              <strong>Minha Rede</strong>
              <span>Veja e gerencie suas conexões e interesses</span>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        <span>Exibir todos os 5 recursos</span>
        <BsArrowRight />
      </div>
    </Resources>
  )
}
