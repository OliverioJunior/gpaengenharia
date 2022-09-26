import styled from 'styled-components';
type ImgProps = {
  imgSrc: string;
};
export const Container = styled.section<ImgProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: 100% 100% no-repeat;
  flex: 1;
  height: calc(100vh);
  h1 {
    margin: 0 auto;
    font-style: Monserrat;
    font-size: 3.5rem;
    font-weight: normal;
    text-shadow: 0.2px 0.5px #cbcaca;
    color: #cbcaca;
  }
  h2 {
    display: flex;
    margin: 12rem auto 0 auto;
    padding: 0 7rem;
    font-style: Monserrat;
    font-size: 2.5rem;
    font-weight: normal;
    text-shadow: 0.2px 0.5px #ccc;
    color: #fff;
    text-align: center;
  }
  @media (max-width: 1070px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
      margin: 6rem auto 0 auto;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
      margin: 2rem auto 0 auto;
      padding: 0 3rem;
    }
  }
  @media (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    h2 {
      font-size: 0.8rem;
      margin: 2rem auto 0 auto;
    }
  }
`;
