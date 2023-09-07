import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'

export const Atividades = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  #container {
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
  }

  #options span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid #2376c8;
  }

  #TaskHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  #Tags {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #Tags span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid #ccc;
    font-weight: 600;
    color: #919191;
  }

  #content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  #title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #post01 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }

  #post01 span,
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #595959;
  }

  #post02 span,
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.7;
    color: #595959;
  }

  #post02 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  #content img {
    max-width: 60px;
    width: 100%;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
  }

  #icons {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    align-items: center;
  }

  #button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  #button:hover {
    background-color: #ccc;
  }

  #button span {
    font-weight: 600;
    color: #919191;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ContentMain = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 750px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  #Text {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.7;
    color: #333;
  }
`

export const Button = styled(Dialog.Trigger)`
  padding: 6px 16px;
  border-radius: 16px;
  border: 1px solid #2376c8;
  color: #2376c8;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;

  :focus {
    box-shadow: 0 0 0 1px #2376c8;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`

export const ContentImage = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 70px;
  height: 70px;
  border-radius: 100%;
`
export const Image = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

export const Buttons = styled.div`
  margin-top: 18rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;

  :hover {
    box-shadow: 0 1px 0 2px #333;
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  justify-content: end;

  span {
    border: 1px solid #ccc;
    background-color: #ccc;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    color: #919191;
    cursor: pointer;
  }
`
