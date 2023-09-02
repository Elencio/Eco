import styled from 'styled-components'

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 10px;

  border-radius: 5px;
  margin-bottom: 20px;

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const ContainerRightSide = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  width: 300px;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.7;
  }

  strong {
    color: #474139;
    font-size: 1rem;
  }

  #first-content {
    display: flex;
    gap: 1rem;
    justify-content: space-between !important;
    flex-direction: row;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
  }

  #second-content {
    display: flex;
    gap: 1rem;
    justify-content: space-between !important;
    flex-direction: row;
    padding-bottom: 1.5rem;
  }

  #center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  button {
    padding: 6px 16px;
    border-radius: 16px;
    border: 1px solid #2376c8;
    background-color: transparent;
    display: flex;
    color: #2376c8;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
  }

  #image-1 {
    width: 100px;
    height: 95px;
    display: flex;
    border-radius: 50%;
    object-fit: cover;
  }

  #profile {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
  }

  #profile1 {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  #title {
    font-size: 0.9rem;
    line-height: 1.7;
  }

  #content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #image-2 {
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 9999px;
    object-fit: cover;
  }

  #connect {
    border-radius: 16px;
    border: 1px solid #666;
    background-color: transparent;
    display: flex;
    color: #666;
    max-width: 200px;
    width: 160px;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    text-align: center;
  }
`
