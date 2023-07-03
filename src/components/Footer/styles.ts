import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  color: #333;
  font-size: 14px;
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
