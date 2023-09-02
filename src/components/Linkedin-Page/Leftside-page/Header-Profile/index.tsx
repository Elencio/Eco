import {
  Profile,
  Content,
  ContentLeft,
  ContentRight,
  Employee,
  Info,
  Tags,
  OptionInfo,
  ContentInfo,
  ProfileContentHeader,
} from './styles'
import { BiPencil } from 'react-icons/bi'
import { SiAdobe } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

export function HeaderProfile() {
  return (
    <ProfileContentHeader>
      <img
        src="https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />

      <Profile>
        <img
          src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <BiPencil size={24} />
      </Profile>

      <Content>
        <ContentLeft>
          <h1>Bryan Vogue</h1>
          <strong> Designer Gráfico | Expert em UI/UX design </strong>
          <span>
            {' '}
            Fala sobre #designdeInteracao, #webdesign, #usabilidade, #uiandux,
            #usuario
          </span>
          <p>
            Estraburgo, Franca @ <a href="#">informações de contacto</a>
          </p>
        </ContentLeft>
        <ContentRight>
          <Employee>
            <FcGoogle size={32} />
            <a>Google</a>
          </Employee>

          <Employee>
            <SiAdobe size={32} />
            <a>Adobe Reader</a>
          </Employee>
        </ContentRight>
      </Content>

      <Info>
        <a href="#">Github</a>
        <p>12.456 seguidores + 500 conexões</p>

        <Tags>
          <span
            style={{
              backgroundColor: '#2376c8',
              color: '#ffffff',
              fontWeight: '600',
            }}
          >
            Tenho interesse em..
          </span>
          <span style={{ color: '#2376c8', fontWeight: '600' }}>
            Adicionar secção de perfil
          </span>
          <span style={{ color: '#333', fontWeight: '600' }}>Mais</span>
        </Tags>

        <OptionInfo>
          <ContentInfo style={{ backgroundColor: '#dde7f1' }}>
            <div id="information">
              <strong>Buscando Emprego</strong>
              <span>Cargos de Estagiaria de desenvolvimento web..</span>
              <a href="#">Exibir detalhes</a>
            </div>
            <BiPencil size={22} color="#333" />
          </ContentInfo>

          <ContentInfo>
            <div id="information">
              <strong>Buscando Emprego</strong>
              <span>Cargos de Estagiaria de desenvolvimento web..</span>
              <a href="#">Exibir detalhes</a>
            </div>
            <span>X</span>
          </ContentInfo>
        </OptionInfo>
      </Info>
    </ProfileContentHeader>
  )
}
