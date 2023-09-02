import { BiPencil, BiLike } from 'react-icons/bi'
import { BsFillHeartFill, BsArrowRight } from 'react-icons/bs'
import { Atividades } from './styles'

export function AtividadesLinkedIn() {
  return (
    <Atividades>
      <div id="container">
        <div id="TaskHeader">
          <div id="content">
            <strong>Atividades</strong>
            <p style={{ color: '#2376c8', fontWeight: '600' }}>
              12.456 seguidores
            </p>
          </div>

          <div id="options">
            <span style={{ color: '#2376c8', fontWeight: '600' }}>
              Criar publicação
            </span>
            <BiPencil size={32} />
          </div>
        </div>

        <div id="Tags">
          <span
            style={{
              backgroundColor: '#057642',
              color: '#ffffff',
              fontWeight: '600',
            }}
          >
            Publicações
          </span>
          <span>Comentários</span>
          <span>Videos</span>
          <span>Imagens</span>
        </div>
        <div id="posts">
          <div id="post01">
            <span>Bryan Vogue publicou isto @ 1d</span>
            <div id="content">
              <img
                src="https://images.pexels.com/photos/6347954/pexels-photo-6347954.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                Design thinking é o termo utilizado para se referir ao processo
                de pensamento crítico e criativo, possibilitando a organização
                de ideias de modo a estimular tomadas de decisão e a busca por
                conhecimento...
              </p>
            </div>
            <div id="icons">
              <BiLike />
              <BsFillHeartFill />
              <span>210</span>
            </div>
          </div>

          <div id="post01">
            <span>Bryan Vogue publicou isto @ 7d</span>
            <div id="content">
              <img
                src="https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                Design thinking é o termo utilizado para se referir ao processo
                de pensamento crítico e criativo, possibilitando a organização
                de ideias de modo a estimular tomadas de decisão e a busca por
                conhecimento...
              </p>
            </div>
            <div id="icons">
              <BiLike />
              <BsFillHeartFill />
              <span>810</span>
            </div>
          </div>

          <div id="post02">
            <span>Bryan Vogue publicou isto @ 7d</span>
            <div id="content">
              <img
                src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                Design thinking é o termo utilizado para se referir ao processo
                de pensamento crítico e criativo, possibilitando a organização
                de ideias de modo a estimular tomadas de decisão e a busca por
                conhecimento...
              </p>
            </div>
            <div id="icons">
              <BiLike />
              <BsFillHeartFill />
              <span>810</span>
            </div>
          </div>
        </div>
      </div>

      <div id="button">
        <span>
          Exibir todas as publicações
          <BsArrowRight />
        </span>
      </div>
    </Atividades>
  )
}
