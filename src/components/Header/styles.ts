import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 6rem;
  background-color: #ffffff;
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  input {
    width: 300px;
    background-color: #dde7f1;
    border: none;
  }
`

export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 600px;
  padding: 10px 40px;
`

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 20px;
  color: #888;
`
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;
    color: #333;
  }
`

export const OptionLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

export const OptionRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.01rem;
  border-left: 1px solid green;
  padding-left: 0.5rem;
`

export const OptionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.01rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  #option {
    display: flex;
    flex-direction: row;
    gap: 0.1rem;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: #333;
    :hover {
      color: #000;
    }
  }
`
export const DropContent = styled(DropdownMenu.Content)`
  max-width: 250px;
  margin-top: 0.6rem;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin-right: -4rem;
  gap: 0.5rem;
  strong {
    border: none;
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 700;
    color: #333;
  }

  p {
    color: #595959;
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    background-color: #fff;
    color: #2376c8;
    border: 1px solid #2376c8;
    border-radius: 6px;
    padding: 0.1rem 0;
  }
`
export const Image = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
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

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 150px;
`

export const DropButton = styled(DropdownMenu.Trigger)`
  background-color: #fff;
  color: #ffffff;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 16px;
  border: none;
`
