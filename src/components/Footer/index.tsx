import { Container, Content } from './styles'
import { BsFillQuestionCircleFill, BsShieldShaded } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'

export function Footer() {
  return (
    <Container>
      <Content>
        <ul>
          <li>Sobre</li>
          <li>Directrizes da comunidade</li>
          <li>Termos e privacidades</li>
          <li>Solucoes e vendas</li>
          <li>Central de seguranca</li>
        </ul>

        <ul>
          <li>Acessibilidade</li>
          <li>Careiras</li>
          <li>preferencias de anuncios</li>
          <li>Para celular</li>
        </ul>

        <ul>
          <li>Solucoes de talentos</li>
          <li>Solucoes de marketing</li>
          <li>Publicidade</li>
          <li>Pequenas empresas</li>
        </ul>

        <ul>
          <div>
            <span>
              <BsFillQuestionCircleFill size={24} />
              Duvidas
            </span>
            <p>Acesse a nossa Central de Ajuda</p>
          </div>
          <div>
            <span>
              <IoMdSettings size={24} />
              Gerencie sua conta e privacidade
            </span>
            <p>Acesse suas Configurações.</p>
          </div>
          <div>
            <span>
              <BsShieldShaded size={24} />
              Visibilidade da Reomendacao
            </span>
            <p>Saiba mais sobre os conteúdos recomendados.</p>
          </div>
        </ul>
        <ul>
          <p>Seleconar idioma</p>
          <input type="text" placeholder="Portugues(Portugues)" />
        </ul>
      </Content>
      <p style={{ marginTop: '10px' }}>LinkedIn Corporation 2023</p>
    </Container>
  )
}
