import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  padding: 0 5rem;
  flex: 1;
  height: 100vh;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    section {
      padding: 20px 0;

      h3 {
        font-size: 3rem;
        font-style: Monserrat;
        font-weight: normal;
        text-shadow: 0.2px 0.5px #fff;
        color: #000;
      }

      p {
        margin: 1.25rem auto 0 auto;
        padding: 1.5rem 0;
        font-style: Monserrat;
        font-weight: Medium;
        font-size: 18px;
        color: gray;
        width: 38rem;
        text-align: justify;
      }
    }
  }
`;

export const ContainerImg = styled.div`
  img {
    width: 500px;
  }
`;
