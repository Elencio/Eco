import { ContainerRightSide, RightSide } from './styles'
import { BiPencil } from 'react-icons/bi'
import {
  BsFillPersonPlusFill,
  BsCheckCircle,
  BsClockFill,
} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaLock } from 'react-icons/fa'
import { useState } from 'react'

interface ButtonStates {
  [key: string]: string
}

export function RightSidePage() {
  const [buttonStates, setButtonStates] = useState<ButtonStates>({})

  const handleButtonClick = (id: string) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: prevState[id] === 'connected' ? 'pending' : 'connected',
    }))
  }

  return (
    <RightSide>
      <ContainerRightSide>
        <div id="first-content">
          <div>
            <span>Idioma do Perfil</span>
            <p>Portuguese</p>
          </div>
          <BiPencil size={32} />
        </div>

        <div id="second-content">
          <div>
            <span>Public profile & URL</span>
            <p>www.hskdfgrguwsfsd</p>
          </div>
          <BiPencil size={32} />
        </div>
      </ContainerRightSide>

      <ContainerRightSide>
        <div id="center-content">
          <span id="title">Bryn, enjoy 50% off 2 months</span>
          <img
            src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            id="image-1"
          />
          <span>invest in your future</span>

          <button>Get 50% off today</button>
        </div>
      </ContainerRightSide>

      <ContainerRightSide>
        <span>As pessoas também viram</span>
        <div id="profile">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            id="image-2"
            alt=""
          />
          <div id="content">
            <strong>Diogo Pinto . 2</strong>
            <span>Software developer | PHP | SQL</span>
            <button id="connect" onClick={() => handleButtonClick('pietro')}>
              {buttonStates.pietro === 'connected' ? (
                <>
                  <BsClockFill size={16} />
                  <span>Pendente</span>
                </>
              ) : (
                <>
                  <BsFillPersonPlusFill size={16} />
                  <span>Conectar</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div id="profile">
          <img
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            id="image-2"
            alt=""
          />
          <div id="content">
            <strong>Alexandra Pien . 1</strong>
            <span>Designer Gráfico | Adobe xd </span>
            <button id="connect">
              <FaLock size={16} />
              <span>Enviar mensagem</span>
            </button>
          </div>
        </div>

        <div id="profile">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            id="image-2"
            alt=""
          />
          <div id="content">
            <strong>Pietro . 2</strong>
            <span>Software developer | PHP | SQL</span>
            <button id="connect" onClick={() => handleButtonClick('pedro')}>
              {buttonStates.pedro === 'connected' ? (
                <>
                  <BsCheckCircle size={16} />
                  <span>Seguindo</span>
                </>
              ) : (
                <>
                  <AiOutlinePlus size={16} />
                  <span>Seguir</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div id="profile">
          <img
            src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            id="image-2"
            alt=""
          />
          <div id="content">
            <strong>Antonia Barros . 2</strong>
            <span>Software developer | ReactJs | NodeJs</span>
            <button id="connect" onClick={() => handleButtonClick('antonio')}>
              {buttonStates.antonio === 'connected' ? (
                <>
                  <BsClockFill size={16} />
                  <span>Pendente</span>
                </>
              ) : (
                <>
                  <BsFillPersonPlusFill size={16} />
                  <span>Conectar</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div id="profile1">
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            id="image-2"
            alt=""
          />
          <div id="content">
            <strong>Sorten Paulo . 2</strong>
            <span>Backend developer | SpringBoot | Java | MySQL</span>
            <button id="connect" onClick={() => handleButtonClick('paulo')}>
              {buttonStates.paulo === 'connected' ? (
                <>
                  <BsCheckCircle size={16} />
                  <span>Seguindo</span>
                </>
              ) : (
                <>
                  <AiOutlinePlus size={16} />
                  <span>Seguir</span>
                </>
              )}
            </button>
          </div>
        </div>
      </ContainerRightSide>
    </RightSide>
  )
}
