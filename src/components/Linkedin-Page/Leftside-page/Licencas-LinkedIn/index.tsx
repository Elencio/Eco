import { Licenças } from './styles'
import { BiPencil } from 'react-icons/bi'
import { BsArrowUpRight, BsLinkedin } from 'react-icons/bs'

import { AiOutlinePlus } from 'react-icons/ai'

export function LicencasLinkedIn() {
  return (
    <Licenças>
      <div id="container">
        <div id="License-Header">
          <strong id="title">Licenças e Certificados</strong>
          <div id="options">
            <AiOutlinePlus size={32} />
            <BiPencil size={32} />
          </div>
        </div>

        <div id="Licenses">
          <div id="license-02">
            <BsLinkedin size={39} color="#0a66c2" />
            <div id="descriptions">
              <h2>Fundamentos de Designe de interacao</h2>
              <strong>Linkedin</strong>
              <span>2015 - 2016</span>
              <button>
                <span>Exibir Credencial</span>
                <BsArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <div id="license-01">
            <BsLinkedin size={39} color="#0a66c2" />
            <div id="descriptions">
              <h2>Universidade Eduardo Mondlane</h2>
              <strong>Bachelor degree</strong>
              <span>2014-2010</span>
              <button>
                <span>Exibir Credencial</span>
                <BsArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div id="license-01">
            <BsLinkedin size={39} color="#0a66c2" />
            <div id="descriptions">
              <h2>Escola Secundaria de Malhazine</h2>
              <strong>Ensino Medio</strong>
              <span>2009-2007</span>
              <button>
                <span>Exibir Credencial</span>
                <BsArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Licenças>
  )
}
