import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  padding: 0 5rem;
  flex: 1;
  height: 100vh;
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    section {
      padding: 20px 0 0 108px;
      h3 {
        font-size: 2rem;
        text-shadow: 0.2px 0.5px #fff;
        color: #000;
        letter-spacing: 0.188rem;
      }
      p {
        margin: 1.25rem auto 0 auto;
        padding: 1.5rem 0;
        font-size: 1rem;
        text-shadow: 0.2px 0.5px #ccc;
        color: #000;
        letter-spacing: 0.188rem;
        text-align: justify;
      }
    }
    img {
      width: 512px;
      height: 300px;
    }
  }
`;
