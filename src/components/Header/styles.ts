import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

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
`
