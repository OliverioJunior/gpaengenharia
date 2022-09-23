import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  padding: 0 5rem;
  flex: 1;
  div {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    section {
      display: flex;
      flex-direction: column;
      padding: 0 100px 0 0;
      form {
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color: #cfcfcd;
        border-radius: 8px;
        textarea {
          resize: none;
        }
        button {
          background-color: #25aee6;
          padding: 1rem;
          border-radius: 0.195rem;
        }
        label {
          display: flex;
          flex-direction: column;
        }
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
