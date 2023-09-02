import styled from 'styled-components'

export const Destaque = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  span,
  p {
    font-size: 0.9rem;
  }

  #Content-destaque {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  #contentPost {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #Post {
    border-radius: 6px;
    border: 1px solid #ccc;
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
  }

  img {
    height: 142px;
    width: 100%;
    border-radius: 0;
    object-fit: cover;
    border: none;
    transform: scale(1.05);
  }

  #icons {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }

  #icons1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`
