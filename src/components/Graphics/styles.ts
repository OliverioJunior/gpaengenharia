import styled from 'styled-components';
export const Container = styled.section`

  display: flex;
  padding: 0 5rem;
  flex: 1;
  height: 100vh;

  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 3em;

    section {
      padding: 20px 0 0 108px;
      margin-top: 2em;

      h3 {
        font-size: 24px;
        font-style: Monserrat;
        font-weight: bold;
        text-shadow: 0.2px 0.5px #fff;
        color: #000;
       
      }

      p{
        margin: 4.25rem auto 0 auto;
        padding: 1.5rem 0;
        font-size: 1rem;
        text-shadow: 0.2px 0.5px #ccc;
        font-size: 18px;
        font-style: Monserrat;
        font-weight: regular;
        color: grey;
        text-align: justify;
        line-height: 23px;
      }
      span {
        padding: 1.5rem 0;
        font-size: 1rem;
        text-shadow: 0.2px 0.5px #ccc;
        font-size: 18px;
        font-style: Monserrat;
        font-weight: regular;
        color: grey;
        text-align: justify;
        position: relative;
        top: 2em;
      }

    }

    img {
      width: 638px;
      height: 462px;
    }
  }
`;
