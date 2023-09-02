import styled from 'styled-components'

export const LeftSide = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    border: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
  }
`
