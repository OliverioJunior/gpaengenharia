import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9em;

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

    &::first-letter {
      text-transform: uppercase;
    }
    &:nth-child(n + 2) {
      margin-left: 0.625rem;
    }

    &:hover {
      border-radius: 6px;
      background-color: #e3e3e3;

      a {
        transform: scale(1.1);
        transition: 0.5s;
      }
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
