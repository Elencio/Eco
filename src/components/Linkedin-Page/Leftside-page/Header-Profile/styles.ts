import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const ProfileContentHeader = styled.div`
  border: 1px solid #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #fff;
  border-radius: 8px;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;

  img {
    margin-top: -122px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: none;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 2rem;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const Tags = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid #2376c8;
  }
`
export const OptionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`
export const ContentInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1rem;

  #information {
    display: flex;
    flex-direction: column;
  }

  #information span {
    font-size: 1rem;
    line-height: 1.2;
    color: #333;
    font-weight: 400;
  }

  #information strong {
    font-size: 1rem;
    line-height: 1.2;
    color: #333;
    font-weight: bold;
  }

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 8px 0 0;

  h1 {
    color: #191919;
    font-size: 1.5rem;
    font-weight: 600;
  }

  strong {
    font-size: 1rem;
    font-weight: 500;
  }

  span,
  p {
    color: #595959;
    font: 0.875rem;
  }

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

export const Employee = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
export const DropContent = styled(DropdownMenu.Content)`
  max-width: 250px;
  margin-left: 6rem;
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

export const DropButton = styled(DropdownMenu.Trigger)`
  background-color: #2376c8;
  color: #ffffff;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 16px;
  border: 1px solid #2376c8;
  font-size: 1rem;
  transition: background-color 0.2s;

  :hover {
    background-color: #165f9c;
  }
`

export const DropButtonMore = styled(DropdownMenu.Trigger)`
  color: #333;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 16px;
  border: 1px solid #333;
  font-size: 1rem;
  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 1px #333;
  }
`
