import styled from 'styled-components';

export const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin: 3rem 6rem;

strong {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  border-radius: 4px;
  background-color: #1B1B1B;
  width: 120px;
  height: 50px;
  color: #fff;
}
`;


export const ContainerText = styled.div`
display: flex;
gap: 3rem;
flex-direction: column;
height: 195px;

`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  font-weight: 400;
  line-height: 180%;
  text-align: justify;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  border-radius: 6px;
  height: 500px;

  span {
    background-color: #e60023;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100px;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 400;
  }

  img {
    max-width: 450px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const Technologies = styled.ul`
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Technology = styled.li`
  background-color: #2F4F4F;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;
`;