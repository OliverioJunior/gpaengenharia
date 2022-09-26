import styled from 'styled-components';
export const Container = styled.section`
  background-color: #858080;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 9rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      padding-bottom: 1rem;
    }
    hr {
      color: grey;
      top: 5em;
    }
  }

  ul {
    padding-top: 1rem;
    width: 50%;
    display: flex;
    justify-content: space-between;
    li {
    }
  }
  @media (max-width: 900px) {
    padding: 1rem 6rem;
  }
  @media (max-width: 750px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 1;
    ul {
      width: 100%;
    }
  }
`;
