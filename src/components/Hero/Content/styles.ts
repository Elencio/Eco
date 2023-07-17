import styled from "styled-components";
import { Button as button } from 'antd';


export const ContainerText = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  span {
    font-size: 16px;
    color: #c4c4c4;
    font-weight: 400;
    line-height: 1.8; 
  }

  button {
    width: 100px;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background-color: #222;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #c4c4c4;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #c4c4c4;
  font-weight: 400;
  line-height: 1.8;
`;


export const Button = styled(button)`
  width: 100px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background-color: #222;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff0033;
  }
`;
