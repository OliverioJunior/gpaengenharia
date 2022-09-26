import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8.5rem;
  flex: 1;
  min-height: 100vh;
  section {
    width: 50%;
    h3 {
      font-size: 24px;
      font-style: Monserrat;
      font-weight: bold;
      text-shadow: 0.2px 0.5px #fff;
      color: #000;
    }
    p {
      text-shadow: 0.2px 0.5px #ccc;
      font-size: 1rem;
      font-style: Monserrat;
      font-weight: Medium;
      color: grey;
      text-align: justify;
      line-height: 27px;
      padding-top: 2rem;
    }
  }
  @media (max-width: 950px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
    section {
      width: 100%;
      h3 {
        padding-top: 3rem;
      }
      p {
        padding-bottom: 3rem;
      }
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 0 2rem;
    section {
      padding: 0;
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.938rem;
      }
    }
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    padding-right: 1.25rem;
  }
  @media (max-width: 950px) {
    width: 80%;
    padding-top: 2rem;
  }
`;
