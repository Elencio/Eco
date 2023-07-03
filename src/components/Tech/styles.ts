import styled from 'styled-components';

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #222;
  border-top: 1px solid #222;
`;

export const TechItem = styled.div`

  border-radius: 4px;

  color: #333;

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 140%;
    gap: 1rem;
    justify-content: center;

    &:before {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    content: "";
    width: 30px;
    height: 50px;
    background-color: #FF4F00;
    }
  }
`;