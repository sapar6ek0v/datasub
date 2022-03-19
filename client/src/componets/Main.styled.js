import styled from "styled-components"


export const Wrapper = styled.div`
  .component {
    position: relative;
    width: 30%;
    margin: 5rem auto;
    padding: 1.4rem;
    box-shadow: 2px 2px 10px #454545;
    background: #FFFFFF;
    border-radius: 4px;
    text-align: center;
  }

  h2 {
    color: rgba(4, 99, 128, 1);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #AAAAAA;
    font-weight: bold;
    font-size: 17px;
    margin-right: 30px;
    padding-left: 10px ;
  }
  
  .line {
    display: flex;
    align-items: center;
  }

  .line {
    margin-bottom: 10px;
    &_input {
      width: 15%;
      flex: 1;
      margin: 0.4rem 0.3rem;
    }
  }

  input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    margin: 1rem 0;
    padding: 4px 10px;
    font-size: 1rem;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #AAAAAA;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }

  button {
    border: 0;
    padding: 1rem 2rem;
    background: rgba(4, 99, 128, 0.9);
    color: #EFECCA;
    font-weight: bold;
    margin-top: 2rem;
    box-shadow: 1px 1px 1px black;
    
    &:hover {
      background: rgba(4, 99, 128, 1);
      box-shadow: none;
    }
    &:disabled {
      background: #8a1922;
      box-shadow: none;
    }
  }
  
  .modal {
    
    &_title {
      text-align: center;
      margin-bottom: 10px;
    }
    
    &_item {
      text-align: center;
      font-weight: bold;
      
      span {
        font-weight: normal;
      }
    }
  }
`