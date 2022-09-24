import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  flex: 1;

  div {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: #f5f5f5;
    margin-left: -1em;

    section {
      display: flex;
      flex-direction: column;
      padding: 0 100px 0 0;
      width: 30em;
      margin-left: 10em;

      h4{
        margin-top:1em;
      }

      form {
        width: 30em;
        padding: 2em 2em 2em 1.7em;
        margin: 1em auto;
        display: flex;
        flex-direction: column;
        background-color: #cfcfcd;
        border-radius: 8px;

        textarea {
          margin-bottom: 1em;
          resize: none;
          border-radius: 6px;
          padding-left: 1em;
          padding-top: 0.3em;
          height: 5em;
        }

        #message {
          margin-top: 1.3em;
        }

        button {
          background-color: #25aee6;
          padding: 1rem;
          border-radius: 0.195rem;
        }

        label {
          display: flex;
          flex-direction: column;

          span {
            padding: 0.3em 0 0.3em 0;
          }

          input {
            padding-left: 1em;
            height: 2em;
            border-radius: 3px;
            border: 0.5px solid black;
          }
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
      margin: auto auto 1.3em auto;
      width: 670px;
      height: 400px;
    }
  }
`;
