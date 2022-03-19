import {GlobalStyle, Wrapper} from "./App.styled.js";
import {Route, Routes} from "react-router-dom";
import Main from "./componets/Main.js";

const App = () => {


    return (
       <>
           <GlobalStyle />
           <Wrapper>
               <div className="main">
                   <Routes>
                       <Route path='/' element={<Main />} />
                   </Routes>
               </div>
           </Wrapper>
       </>
    );
}

export default App;
