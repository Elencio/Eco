import { Formação } from './styles'
import UspLogo from '../../../../assets/usp-logo.svg'
import UemLogo from '../../../../assets/small-logotipo.jpg'
import { BiPencil } from 'react-icons/bi'

import { AiOutlinePlus } from 'react-icons/ai'

export function FormacaoLinkedIn() {
  return (
    <Formação>
      <div id="Degree-Header">
        <strong id="title">Formação Académica</strong>

        <div id="options">
          <AiOutlinePlus size={32} />
          <BiPencil size={32} />
        </div>
      </div>

      <div id="degrees">
        <div id="degree-02">
          <img src={UspLogo} alt="" />
          <div id="descriptions">
            <h2>Universidade Federal de Sao Paulo</h2>
            <strong>Mastery Degree</strong>
            <span>2015 - 2016</span>
          </div>
        </div>
        <div id="degree-01">
          <img src={UemLogo} alt="" />
          <div id="descriptions">
            <h2>Universidade Eduardo Mondlane</h2>
            <strong>Bachelor degree</strong>
            <span>2014-2010</span>
          </div>
        </div>
      </div>
    </Formação>
  )
}
