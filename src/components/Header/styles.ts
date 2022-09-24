import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  width: 100%;
  height: 60px;

  div {
    span {
      color: #545252;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-weight: 300;
    color: #545252;
    padding: 0 1.5em;

    &:nth-child(n + 2) {
      margin-left: 0.625rem;
    }

    &:hover {
      border-bottom: 0.002em solid grey;
      transition: 2s;
    }
  }
  #cadastro {
    border: 1px solid blue;
    padding: 0.5em;
    border-radius: 6px;
    color: white;
    background-color: blue;

    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
`;
