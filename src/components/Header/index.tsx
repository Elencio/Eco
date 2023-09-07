import {
  HeaderContainer,
  LeftSideContainer,
  OptionHeader,
  RightSideContainer,
  OptionLeft,
  OptionRight,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  DropContent,
  ItemContent,
  DropButton,
  HeaderContent,
  Content,
  Image,
  ContentImage,
  Container1,
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import {
  BsFillPeopleFill,
  BsHandbagFill,
  BsFillGrid3X3GapFill,
  BsLinkedin,
  BsFillCaretDownFill,
} from 'react-icons/bs'
import { ChatCircleDots } from 'phosphor-react'
import { MdNotifications } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { TbTargetArrow } from 'react-icons/tb'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar'

export default function Header() {
  return (
    <HeaderContainer>
      <LeftSideContainer>
        <BsLinkedin size={39} color="#0a66c2" />
        <SearchInputContainer>
          <SearchInput type="text" placeholder="Pesquisar" />
          <SearchIcon size={16} color="#191919" style={{ fontWeight: '600' }} />
        </SearchInputContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <OptionLeft>
          <OptionHeader>
            <AiFillHome size={24} />
            <span>Inicio</span>
          </OptionHeader>

          <OptionHeader>
            <BsFillPeopleFill size={24} />
            <span>Minha Rede</span>
          </OptionHeader>

          <OptionHeader>
            <BsHandbagFill size={24} />
            <span>Vagas</span>
          </OptionHeader>

          <OptionHeader>
            <ChatCircleDots size={24} weight="fill" />
            <span>Mensagem</span>
          </OptionHeader>
          <OptionHeader>
            <MdNotifications size={24} />
            <span>Notificações</span>
          </OptionHeader>

          <OptionHeader>
            <RxAvatar size={24} color="#333" />
            <DropdownMenu.Root>
              <DropButton>
                <span id="option">
                  Eu
                  <BsFillCaretDownFill />
                </span>
              </DropButton>
              <DropContent>
                <HeaderContent>
                  <Container1>
                    <ContentImage>
                      <Image
                        src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                      <Avatar.Fallback />
                    </ContentImage>

                    <Content>
                      <strong>Bryn Vogue</strong>
                      <span>Designer Gráfico | Expert em UI/UX design</span>
                    </Content>
                  </Container1>
                  <button>Ver perfil</button>
                </HeaderContent>
                <ItemContent>
                  <strong>Conta</strong>
                  <span>Configurações e privacidade</span>
                  <span>Ajuda</span>
                  <span>Idioma</span>
                </ItemContent>
                <DropdownMenu.Separator />
                <ItemContent>
                  <strong>Gerenciar</strong>
                  <span>Publicações e atividades</span>
                  <span>Empresa: ARC DEVs</span>
                  <span>Empresa: Frontstack</span>
                  <span>Conta de anuncio de Vaga</span>
                </ItemContent>
                <DropdownMenu.Separator />
                <ItemContent>
                  <span>Sair</span>
                </ItemContent>
              </DropContent>
            </DropdownMenu.Root>
          </OptionHeader>
        </OptionLeft>

        <OptionRight>
          <OptionHeader>
            <BsFillGrid3X3GapFill size={24} />
            <span id="option">
              Para negócios
              <BsFillCaretDownFill />
            </span>
          </OptionHeader>

          <OptionHeader>
            <TbTargetArrow size={24} />
            <span>Vincular anuncio</span>
          </OptionHeader>
        </OptionRight>
      </RightSideContainer>
    </HeaderContainer>
  )
}
