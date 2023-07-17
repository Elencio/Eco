import styled from "styled-components";
import { Card } from 'antd';


export const Cards = styled(Card)`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  max-width: 400px;

  span {
    margin-top: 1rem ;
    background-color: #e60023;
    display: flex;
    font-family: "Poppins", sans-serif;
    flex-direction: row;
    max-width: 120px;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: #ff0033;
    }
  }

  img {
    margin-top: 1rem ;
    max-width: 450px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 10px;
  }
`;



export const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  padding-top: 1rem ;
  
  font-family: "Poppins", sans-serif;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  padding-top: 1rem ;
`;

export const Technologies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem ;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Technology = styled.li`
  background-color: #2F4F4F;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 4px;
  
  font-family: "Poppins", sans-serif;

 

  &:hover {
    background-color: #ff0033;
  }
`;
