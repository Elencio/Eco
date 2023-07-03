import styled from 'styled-components';




export const SobreContainer = styled.div`
  border-top: 1px solid #222;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  padding: 40px;
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  padding: 40px;
`;




export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 170%;
  color: #e60023;
  font-weight: 500;

`;
