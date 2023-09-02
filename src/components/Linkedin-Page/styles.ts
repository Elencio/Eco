import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #ff385c; /* Airbnb's primary color */
  margin: 10px 0;
`

export const ProfileContentHeader = styled.div`
  border: 1px solid #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #fff;
  border-radius: 8px;
`
