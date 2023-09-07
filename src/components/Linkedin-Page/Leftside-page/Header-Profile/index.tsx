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
  DropContent,
  ItemContent,
  DropButton,
  DropButtonMore,
} from './styles'
import { BiPencil } from 'react-icons/bi'
import { SiAdobe } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { RiShareForward2Line } from 'react-icons/ri'
import { MdSaveAlt } from 'react-icons/md'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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
          <DropdownMenu.Root>
            <DropButton>Tenho interesse em..</DropButton>
            <DropContent>
              <ItemContent>
                <strong>Prestar servicos</strong>
                <p>
                  Destaque os seus servicos que voce oferece para que os novos
                  clientes possam descobrir voce
                </p>
              </ItemContent>
              <ItemContent>
                <strong>Contratar</strong>
                <p>
                  Compartilhe que voce esta contratando e atraia candidatos
                  qualificados
                </p>
              </ItemContent>
            </DropContent>
          </DropdownMenu.Root>

          <span style={{ color: '#2376c8', fontWeight: '600' }}>
            Adicionar secção de perfil
          </span>

          <DropdownMenu.Root>
            <DropButtonMore>Mais</DropButtonMore>
            <DropContent>
              <ItemContent>
                <p>
                  <RiShareForward2Line size={24} />
                  Enviar perfil em uma mensagem
                </p>
              </ItemContent>
              <ItemContent>
                <p>
                  <MdSaveAlt size={24} />
                  Salvar como pdf
                </p>
              </ItemContent>
              <ItemContent>
                <p>
                  <BsFillInfoSquareFill size={24} />
                  Sobre este perfil
                </p>
              </ItemContent>
            </DropContent>
          </DropdownMenu.Root>
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
              <strong>Destaque os serviços</strong>
              <span>que voce oferece para que as pessoas possam ...</span>
              <a href="#">comece ja</a>
            </div>
            <span>X</span>
          </ContentInfo>
        </OptionInfo>
      </Info>
    </ProfileContentHeader>
  )
}
