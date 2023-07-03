import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 6rem;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
   gap: 2rem;


  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  span {
    border: 2px solid #e60023;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #111111;
    font-weight: 500;
    cursor: pointer;
  }



  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  margin-right: 15px;
  color: #111111;
  font-weight: 500;
  &:last-child {
    margin-right: 0;
  }
`;