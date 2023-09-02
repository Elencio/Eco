import { Projetos } from './styles'
import { BiPencil } from 'react-icons/bi'
import { BsArrowUpRight } from 'react-icons/bs'

import { AiOutlinePlus } from 'react-icons/ai'

export function ProjectosLinkedIn() {
  return (
    <Projetos>
      <div id="container">
        <div id="Projeto-Header">
          <strong>Projetos</strong>
          <div id="options">
            <AiOutlinePlus size={32} />
            <BiPencil size={32} />
          </div>
        </div>

        <div id="Licenses">
          <div id="projeto-02">
            <strong>Coffee-Deliver</strong>
            <span>mar de 2023 - abr de 2023</span>
            <strong>Associado a Alura</strong>
            <button>
              Exibir projeto
              <BsArrowUpRight size={18} />
            </button>
          </div>
          <div id="projeto-01">
            <strong>Login-Page</strong>
            <span>mar de 2023 - abr de 2023</span>
            <strong>Associado a Alura</strong>
            <button>
              Exibir projeto
              <BsArrowUpRight size={18} />
            </button>
          </div>

          <div id="projeto-01">
            <strong>Commerce</strong>
            <span>mar de 2023 - abr de 2023</span>
            <strong>Associado a Alura</strong>
            <button>
              Exibir projeto
              <BsArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Projetos>
  )
}
