import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  padding: 0 9rem;
  flex: 1;
  height: 100vh;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        margin: 1.25rem 1em 0 0;
        padding: 1.5rem 0;
        font-style: Monserrat;
        font-weight: Medium;
        font-size: 18px;
        color: gray;
        width: 30rem;
        text-align: justify;
      }
    }

    #subtema{
      position: relative;
      left: -3.55em;
    }
  }
`;

export const ContainerImg = styled.div`
  img {
    width: 662px;
    height: 489px;
  }

`;
