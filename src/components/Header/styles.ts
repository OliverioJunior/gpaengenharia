import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9rem;

  width: 100%;
  height: 60px;

  div {
    span {
      color: #545252;
    }
  }
  @media (max-width: 1076px) {
    padding: 0 2rem;
  }
  @media (max-width: 800px) {
    padding: 0 1rem;
    flex-direction: column;
    height: max-content;
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
    a {
      transform: scale(1.1);
      transition: 0.5s;
      &:hover {
        color: #000;
        border-bottom: 1px solid #000;
      }
    }
    &:last-child {
      border: 1px solid blue;
      padding: 0.5em;
      border-radius: 6px;
      color: white;
      background-color: blue;

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        background-color: blue;
        a {
          color: #fff;
          border: none;
        }
      }
    }
    @media (max-width: 800px) {
      padding: 2rem 0.5rem;
    }
  }
`;
