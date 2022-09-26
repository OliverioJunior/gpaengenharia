import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  flex: 1;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h4 {
      font-size: 1.4rem;
    }
    ul {
      margin-top: 2rem;
      li {
        &:nth-child(n + 2) {
          padding-top: 2rem;
        }
        a {
          font-weight: 600;
          color: #002255;
        }
      }
    }
  }
  @media (max-width: 950px) {
    padding: 6rem 5rem;
    justify-content: flex-start;
    width: 100%;
  }
  @media (max-width: 750px) {
    padding: 6rem 2rem;
    justify-content: flex-start;
    width: 100%;
  }
`;
export const ContainerImg = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  img {
    width: 75%;
  }

  @media (max-width: 950px) {
    width: 100%;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
