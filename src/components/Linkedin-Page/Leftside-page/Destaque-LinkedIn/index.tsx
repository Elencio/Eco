import { Destaque } from './styles'
import { BiLike } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'

export function DestaqueLinkedIn() {
  return (
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
              Google search is a powerful tool for finding information on a wide
              range of topics. It allows users to conduct searches by entering
              keywords or phrases related to their topic of interest. With just
              a few clicks, Google can provide a plethora of search results that
              are.
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
  )
}
