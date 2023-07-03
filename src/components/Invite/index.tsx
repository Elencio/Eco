import { Input} from 'antd';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const { Search } = Input;



const onSearch = (value: string) => console.log(value);

const Container = styled.div`
  max-width: 1400px;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  margin-bottom: 12rem;
`;

const Content = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    width: 500px;
    padding: 0 1rem;
    border-radius: 0;
    border: 2px solid #e60023;
    font-family: "Poppins", sans-serif;
  }

  button {
    padding: 1rem;
    border-radius:0 ;
    border-left: 0;
    border-bottom: 2px solid #e60023;
    border-right: 2px solid #e60023;
    border-top: 2px solid #e60023;
    font-family: "Poppins", sans-serif;
    color: #111111;
    font-weight: 500;
  }
 
`;

const Title = styled.span`
  font-size: 16px;
  color: #111111;
  margin: 40px;
  font-weight: 500;
  line-height: 160%;
`;

const StyledSearch = styled(Search)`
  max-width: 500px;
  border: 0;
  border-radius: 0;
`;

const Invite: React.FC = () => (
  <Container>
    <Title> 
      Junto-se à comunidade de desenvolvedores juniores! Aqui, você encontrará um espaço vibrante e acolhedor projetado especificamente para nos ajudarmos como desenvolvedores em início de carreira a impulsionar o nosso crescimento profissional.

    </Title>
    <Content>
      <input type="text" placeholder='insira o seu email' />
      <button type='submit'>
        Enviar
      </button>
    </Content>
    
  </Container>
);

export default Invite;
