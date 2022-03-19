import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-image: linear-gradient(-90deg, #E6E2AF 0%, #002F2F 100%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  .main  {
    flex: 1;
  }
`