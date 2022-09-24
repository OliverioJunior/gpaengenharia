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
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: #4132c1;
  border-radius: 0.5rem;
`;
export const WrapperLogo = styled.div`
  width: 164px;
  height: 54px;
  display: flex;
  img {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;
export const Logo = styled.h1`
  width: 164px;
  height: 54px;
  position: absolute;
  border-radius: 0.5rem;
  opacity: 0.5;
  filter: drop-shadow(1px 1px 2px #0033ff);
  font-weight: 500;
  text-align: center;
`;

export const ContainerInput = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  &:nth-child(n + 2) {
    margin-top: 2rem;
  }
  input {
    width: 80%;
    height: 30px;
    border: none;
    padding-left: 5px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
`;
