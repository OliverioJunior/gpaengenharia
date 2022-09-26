import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  padding: 0 9rem;
  flex: 1;
  min-height: 100vh;
  @media (max-width: 1070px) {
    padding: 0 2rem;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 650px) {
    padding: 0 1rem;
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const ContainerSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    height: max-content;
    padding: 20px 20px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      font-size: 2rem;
      font-style: Monserrat;
      font-weight: normal;
      text-shadow: 0.2px 0.5px #fff;
      color: #000;
    }

    p {
      padding-top: 2.3rem;
      width: 100%;
      font-style: Monserrat;
      font-weight: Medium;
      font-size: 1rem;
      color: gray;
      text-align: justify;
    }
  }
  @media (max-width: 1070px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 950px) {
    width: 100%;

    h3 {
      font-size: 2rem;
    }
    section {
      &:nth-child(2) {
        p {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (max-width: 650px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const ContainerImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 950px) {
    width: 100%;

    h3 {
      font-size: 2rem;
    }
  }
`;
