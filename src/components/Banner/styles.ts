import styled from 'styled-components';
import banner from '../../assets/banner.png';
export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-image: url(${banner});
  background-size: 100% 100% no-repeat;
  flex: 1;
  height: calc(100vh - 60px);
  h1 {
    margin: 0 auto;
    font-style: Monserrat;
    font-size: 56px;
    font-weight: normal;
    text-shadow: 0.2px 0.5px #fff;
    color: #cbcaca;
    letter-spacing: 0.188rem;
  }
  h2 {
    display: flex;
    margin: 12.25rem auto 0 auto;
    padding: 0 5rem;
    font-style: Monserrat;
    font-size: 48px;
    font-weight: normal;
    text-shadow: 0.2px 0.5px #ccc;
    color: #cbcaca;
    letter-spacing: 0.188rem;
    text-align: center;
  }
`;
