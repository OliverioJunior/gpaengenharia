import styled from 'styled-components';

export const HeadGPA = styled.head`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  width: 100%;
  height: 60px;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-weight: 600;
    color: #4d3e52;
    &:nth-child(n + 2) {
      margin-left: 0.625rem;
    }
    &:hover {
      a {
        border-bottom: 2px solid #cdcdcd;
      }
    }
  }
`;
