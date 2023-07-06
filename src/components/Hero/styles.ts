import styled from 'styled-components';

export const ComponentContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
flex-direction: row;
grid-gap: 5rem;
max-width: 1400px;
width: 900px;
margin: 2rem auto;
`;


export const ContainerText = styled.div`
margin-top: 1rem;
display: flex;
gap: 1rem;
flex-direction: column;

span {
  text-align: justify;
  font-size: 16px;
  color: #666;
  font-weight: 400;
  line-height: 180%;
  text-align: justify;
}

button {
  width: 100px;
  padding: 1rem;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  background-color: #222;
}

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
 
`;

export const Card = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  border-radius: 6px;
  max-width: 400px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  span {
    background-color: #e60023;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    max-width: 120px;
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

export const Button = styled.a`
  width: 100px;
  padding: 1rem;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  background-color: #222;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;