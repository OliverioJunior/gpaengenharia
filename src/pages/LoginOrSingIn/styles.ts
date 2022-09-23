import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 200px;
  height: 400px;
`;

export const Logo = styled.div`
  width: 164px;
  height: 59px;
  background-color: pink;
  h1 {
    position: relative;
    top: 55px;
    left: 35px;
    opacity: 0.5;
  }
`;
