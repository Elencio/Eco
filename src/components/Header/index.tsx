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
            <AiFillHome size={24} color="#333" />
            <span>Inicio</span>
          </OptionHeader>

          <OptionHeader>
            <BsFillPeopleFill size={24} color="#333" />
            <span>Minha Rede</span>
          </OptionHeader>

          <OptionHeader>
            <BsHandbagFill size={24} color="#333" />
            <span>Vagas</span>
          </OptionHeader>

          <OptionHeader>
            <ChatCircleDots size={24} weight="fill" />
            <span>Mensagem</span>
          </OptionHeader>
          <OptionHeader>
            <MdNotifications size={24} color="#333" />
            <span>Notificações</span>
          </OptionHeader>

          <OptionHeader>
            <RxAvatar size={24} color="#333" />
            <span id="option">
              Eu
              <BsFillCaretDownFill />
            </span>
          </OptionHeader>
        </OptionLeft>

        <OptionRight>
          <OptionHeader>
            <BsFillGrid3X3GapFill size={24} color="#333" />
            <span id="option">
              Para negócios
              <BsFillCaretDownFill />
            </span>
          </OptionHeader>

          <OptionHeader>
            <TbTargetArrow size={24} color="#333" />
            <span>Vincular anuncio</span>
          </OptionHeader>
        </OptionRight>
      </RightSideContainer>
    </HeaderContainer>
  )
}
