import {
  Container,
  RightSide,
  LeftSide,
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
  Resources,
  Destaque,
  Atividades,
  Sobre,
  Experiencia,
  Formação,
  Licenças,
  Projetos,
  ContainerRightSide,
} from './styles'
import { BiPencil, BiLike } from 'react-icons/bi'
import {
  BsFillHeartFill,
  BsArrowUpRight,
  BsFillPersonPlusFill,
  BsFillPeopleFill,
  BsArrowRight,
  BsLinkedin,
} from 'react-icons/bs'
import { SiAdobe } from 'react-icons/si'
import { GrDiamond } from 'react-icons/gr'
import { AiOutlinePlus, AiOutlineEye } from 'react-icons/ai'
import { FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RiHotspotFill } from 'react-icons/ri'

const User = () => {
  return (
    <Container>
      <LeftSide>
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
                Fala sobre #designdeInteracao, #webdesign, #usabilidade,
                #uiandux, #usuario
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

        <Resources>
          <div id="header">
            <strong>Recursos</strong>
            <span id="item">
              <AiOutlineEye />
              Exibido apenas a voce
            </span>

            <div id="option">
              <div id="info">
                <RiHotspotFill size={32} />
                <div id="info-01">
                  <strong>Modo de Criação</strong>
                  <span>
                    Destaque-se, exiba conteúdos no seu perfil e tenha acesso a
                    ferramentas de criação de conteúdo
                  </span>
                </div>
              </div>
              <div id="info1">
                <BsFillPeopleFill size={32} color="#333" />
                <div id="info-01">
                  <strong>Minha Rede</strong>
                  <span>Veja e gerencie suas conexões e interesses</span>
                </div>
              </div>
            </div>
          </div>

          <div id="content">
            <span>Exibir todos os 5 recursos</span>
            <BsArrowRight />
          </div>
        </Resources>

        <Destaque>
          <strong>Em destaque</strong>
          <div id="Content-destaque">
            <div id="Post">
              <p>publicação</p>

              <div id="contentPost">
                <span>github-blog</span>
                <img
                  src="https://images.pexels.com/photos/3747300/pexels-photo-3747300.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>

              <div id="icons1">
                <BiLike />
                <BsFillHeartFill />
                <span>500 @ 23 comentários</span>
              </div>
            </div>

            <div id="Post">
              <p>publicação</p>

              <div id="contentPost">
                <span>Google Search</span>
                <p>
                  Google search is a powerful tool for finding information on a
                  wide range of topics. It allows users to conduct searches by
                  entering keywords or phrases related to their topic of
                  interest. With just a few clicks, Google can provide a
                  plethora of search results that are.
                </p>
              </div>

              <div id="icons">
                <BiLike />
                <BsFillHeartFill />
                <span>210 @ 73 comentários</span>
              </div>
            </div>
          </div>
        </Destaque>

        {/* Secção Atividades  */}

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
                    Design thinking é o termo utilizado para se referir ao
                    processo de pensamento crítico e criativo, possibilitando a
                    organização de ideias de modo a estimular tomadas de decisão
                    e a busca por conhecimento...
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
                    Design thinking é o termo utilizado para se referir ao
                    processo de pensamento crítico e criativo, possibilitando a
                    organização de ideias de modo a estimular tomadas de decisão
                    e a busca por conhecimento...
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
                    Design thinking é o termo utilizado para se referir ao
                    processo de pensamento crítico e criativo, possibilitando a
                    organização de ideias de modo a estimular tomadas de decisão
                    e a busca por conhecimento...
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

        <Sobre>
          <div id="SobreHeader">
            <strong>Sobre</strong>
            <BiPencil size={32} />
          </div>

          <p>
            Design é a concepção e elaboração de um projeto. Aprenda tudo sobre
            essa área do conhecimento e descubra uma solução para criar artes
            gráficas de maneira rápida e gratuita.De todos os termos
            estrangeiros adotados na língua portuguesa, “design” é um dos que
            mais causam confusão. No entanto, você se depara com essa palavra o
            tempo todo: na gráfica, no escritório, no salão de beleza e até em
            casa...
          </p>

          <div id="content">
            <GrDiamond />
            <div>
              <strong>Principais Competências</strong>
              <div id="options">
                <span>Javascript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Criatividade</span>
              </div>
            </div>
          </div>
        </Sobre>
        {/* 
        Secção de Experiencia */}

        <Experiencia>
          <div id="Experience-Header">
            <strong id="title-header">Experiencia</strong>

            <div id="options">
              <AiOutlinePlus size={32} />
              <BiPencil size={32} />
            </div>
          </div>

          <div id="experiences">
            <div id="experience-01">
              <FcGoogle size={62} />
              <div id="descriptions">
                <h2>Designer UX/UI</h2>
                <strong>Google @ tempo integral</strong>
                <span>Maio de 2018 - o momento - 4 anos e 8 meses</span>
                <span>Estrasburgo, Franca</span>
                <p>
                  Trabalhando na area de Frontend no Projeto de iniciação
                  Científica, com foco no desenvolvimento de interfaces do
                  usuário utilizando o framework React. Nessa posição, sou
                  responsável por criar experiências interativas e responsivas,
                  desenvolver componentes reutilizáveis e aplicar as melhores
                  práticas de design e usabilidade.
                </p>

                <strong id="title">Competências:</strong>
                <p>
                  Usabilidade · Vite · Figma · React · Styled-components ·
                  Ant-design · Computação gráfica · Cleancode · Git · Estruturas
                  de dados · Trabalho em equipe · TypeScript · GitHub
                </p>
              </div>
            </div>
            <div id="experience-02">
              <SiAdobe size={42} />
              <div id="descriptions">
                <h2>Designer UX/UI junior</h2>
                <strong>Adobe Reader @ tempo integral</strong>
                <span>Agosto de 2016 - 2018 - 2 anos</span>
                <span>Florença, Italia</span>

                <p>
                  Realizar desafios que buscam aprimorar as capacidades de
                  desenvolvedor frontend. Criação de logos ,conteúdo voltado a
                  desenvolvedores juniores e designs no figma. Incentivar a
                  programação limpa e as boas práticas.
                </p>

                <strong>Competências:</strong>
                <p>
                  Usabilidade · Vite · Figma · React · Styled-components ·
                  Ant-design · Computação gráfica · Cleancode · Git · Estruturas
                  de dados · Trabalho em equipe · TypeScript · GitHub
                </p>
              </div>
            </div>
          </div>
        </Experiencia>
        {/* 
        Formacao Academica */}

        <Formação>
          <div id="Degree-Header">
            <strong>Formação Académica</strong>

            <div id="options">
              <AiOutlinePlus size={32} />
              <BiPencil size={32} />
            </div>
          </div>

          <div id="degrees">
            <div id="degree-02">
              <strong>Logo universidade</strong>
              <div id="descriptions">
                <h2>Universidade Federal de Sao Paulo</h2>
                <strong>Mastery Degree</strong>
                <span>2015 - 2016</span>
              </div>
            </div>
            <div id="degree-01">
              <strong>Logo Universidade</strong>
              <div id="descriptions">
                <h2>Universidade Eduardo Mondlane</h2>
                <strong>Bachelor degree</strong>
                <span>2014-2010</span>
              </div>
            </div>

            <div id="degree-01">
              <strong>Logo Universidade</strong>
              <div id="descriptions">
                <h2>Escola Secundaria de Malhazine</h2>
                <strong>Ensino Medio</strong>
                <span>2009-2007</span>
              </div>
            </div>
          </div>
        </Formação>

        {/* Seccao de Licencas */}

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
      </LeftSide>

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
              <button id="connect">
                <BsFillPersonPlusFill size={16} />
                <span>Conectar</span>
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
              <button id="connect">
                <AiOutlinePlus size={16} />
                <span>Seguir</span>
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
              <button id="connect">
                <BsFillPersonPlusFill size={16} />
                <span>Conectar</span>
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
              <button id="connect">
                <AiOutlinePlus size={16} />
                <span>Seguir</span>
              </button>
            </div>
          </div>
        </ContainerRightSide>
      </RightSide>
    </Container>
  )
}

export default User
