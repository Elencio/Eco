import styled from 'styled-components'

export const Atividades = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  #container {
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
  }

  #options span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid blue;
  }

  #TaskHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  #Tags {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #Tags span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid #ccc;
    font-weight: 600;
    color: #919191;
  }

  #content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  #post01 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }

  #post01 span,
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #595959;
  }

  #post02 span,
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.7;
    color: #595959;
  }

  #post02 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  #content img {
    max-width: 60px;
    width: 100%;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
  }

  #icons {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    align-items: center;
  }

  #button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
  }

  #button span {
    font-weight: 600;
    color: #919191;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`
