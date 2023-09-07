import { BiPencil, BiLike, BiCalendar, BiTimeFive } from 'react-icons/bi'
import {
  BsFillHeartFill,
  BsFillCaretDownFill,
  BsArrowRight,
  BsXLg,
  BsThreeDots,
} from 'react-icons/bs'
import { GiSevenPointedStar } from 'react-icons/gi'
import { AiOutlinePicture } from 'react-icons/ai'
import {
  Atividades,
  ContentMain,
  DialogContent,
  Button,
  ContentHeader,
  Perfil,
  ContentImage,
  Image,
  Info,
  Buttons,
  StyledButton,
  Option,
} from './styles'

import * as Avatar from '@radix-ui/react-avatar'
import * as Dialog from '@radix-ui/react-dialog'

export function AtividadesLinkedIn() {
  return (
    <Atividades>
      <div id="container">
        <div id="TaskHeader">
          <div id="content">
            <strong id="title">Atividades</strong>
            <p style={{ color: '#2376c8', fontWeight: '600' }}>
              12.456 seguidores
            </p>
          </div>

          <div id="options">
            <Dialog.Root>
              <Button>Criar publicação</Button>
              <Dialog.Portal>
                <ContentMain />
                <DialogContent>
                  <ContentHeader>
                    <Perfil>
                      <ContentImage>
                        <Image
                          src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                        />
                        <Avatar.Fallback />
                      </ContentImage>
                      <Info>
                        <strong>Bryn Vogue</strong>
                        <span>Publicar em Todos</span>
                      </Info>
                      <BsFillCaretDownFill size={24} color="#333" />
                    </Perfil>
                    <Dialog.Close asChild>
                      <BsXLg size={24} color="#333" />
                    </Dialog.Close>
                  </ContentHeader>

                  <span id="Text">No que esta pensando?</span>

                  <Buttons>
                    <StyledButton>
                      <AiOutlinePicture size={24} color="#333" />
                    </StyledButton>
                    <StyledButton>
                      <BiCalendar size={24} color="#333" />
                    </StyledButton>
                    <StyledButton>
                      <GiSevenPointedStar size={24} color="#333" />
                    </StyledButton>
                    <StyledButton>
                      <BsThreeDots size={24} color="#333" />
                    </StyledButton>
                  </Buttons>
                  <Option>
                    <BiTimeFive size={24} color="#333" />
                    <span>Publicar</span>
                  </Option>
                </DialogContent>
              </Dialog.Portal>
            </Dialog.Root>
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
              <BsFillHeartFill color="red" />
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
              <BsFillHeartFill color="red" />
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
              <BsFillHeartFill color="red" />
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
