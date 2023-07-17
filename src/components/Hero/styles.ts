import styled from 'styled-components';

export const ComponentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5rem;
  max-width: 1400px;
  width: 900px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;








