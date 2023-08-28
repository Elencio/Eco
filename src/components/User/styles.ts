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

export const LeftSide = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    border: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const ProfileContentHeader = styled.div`
  border: 1px solid #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #fff;
  border-radius: 8px;
`

export const Resources = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  strong {
    color: #474139;
  }

  #item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  #header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
  }

  #option {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #info1 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
  }

  #info-01 {
    display: flex;
    flex-direction: column;
  }

  #content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
  }

  #content span {
    font-weight: 600;
    color: #474139;
  }
`

export const Destaque = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  span,
  p {
    font-size: 0.9rem;
  }

  #Content-destaque {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  #contentPost {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #Post {
    border-radius: 6px;
    border: 1px solid #ccc;
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
  }

  img {
    height: 142px;
    width: 100%;
    border-radius: 0;
    object-fit: cover;
    border: none;
    transform: scale(1.05);
  }

  #icons {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }

  #icons1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`

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

export const Sobre = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.7;
    color: #595959;
  }

  #SobreHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #content {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #options span {
    font-size: 0.9rem;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:after {
      display: flex;
      content: '';
      padding: 0.25rem;
      margin: 0.7rem;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      background-color: #000;
    }
  }
`

export const Experiencia = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  #title-header {
    font-size: 1.5rem;
    font-weight: 600;
  }

  #Experience-Header {
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

  #experience-01 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  #experience-02 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }

  #experiences {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #descriptions h2 {
    font-size: 1.1rem;
    color: #474139;
    font-weight: bold;
    line-height: 1.7;
  }

  #descriptions span {
    font-size: 0.8rem;
    color: #595959;
    font-weight: 500;
    line-height: 1.7;
  }

  #descriptions strong {
    font-size: 0.8rem;
    color: #191919;
    font-weight: 500;
    line-height: 1.7;
  }

  #descriptions p {
    font-size: 0.8rem;
    color: #191919;
    font-weight: 400;
    line-height: 1.7;
  }

  #title {
    font-size: 0.8rem;
    color: #474139;
    font-weight: bold;
    line-height: 1.7;
  }
`

export const Formação = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  #Degree-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #degrees {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #degree-01 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }

  #degree-02 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`
export const Licenças = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    border-radius: 15px;
    border: 1px solid #333;
    cursor: pointer;
    background-color: transparent;

    span {
      font-size: 0.875rem;
      line-height: 1.7;
      font-weight: 600;
      color: #595959;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 600;
    color: #474139;
  }

  strong,
  span {
    font-size: 0.875rem;
    line-height: 1.7;
    font-weight: 400;
  }

  #container {
    padding: 1rem 2rem;
  }

  #License-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #title {
    font-size: 1.5rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  #licenses {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #license-01 {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding: 1rem;
  }

  #license-02 {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Projetos = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;

  #container {
    padding: 1rem 2rem;
  }

  #Projeto-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #projeto-01 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  #projeto-02 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    border: 1px solid #000;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
`

export const Idiomas = styled.section``

export const Causas = styled.section``

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;

  img {
    margin-top: -122px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: none;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 2rem;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const Tags = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  span {
    padding: 2px 10px;
    border-radius: 16px;
    border: 1px solid blue;
  }
`

export const Employee = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const OptionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`
export const ContentInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1rem;

  #information {
    display: flex;
    flex-direction: column;
  }

  #information span {
    font-size: 1rem;
    line-height: 1.2;
    color: #333;
    font-weight: 400;
  }

  #information strong {
    font-size: 1rem;
    line-height: 1.2;
    color: #333;
    font-weight: bold;
  }

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 8px 0 0;

  h1 {
    color: #191919;
    font-size: 1.5rem;
    font-weight: 600;
  }

  strong {
    font-size: 1rem;
    font-weight: 500;
  }

  span,
  p {
    color: #595959;
    font: 0.875rem;
  }

  a {
    font-size: 1rem;
    line-height: 1.7;
    color: #2376c8;
    text-decoration: none;
    font-weight: 600;
  }
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

// RightSide styles
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
