
import Produto from './pages/Produto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return(
       <BrowserRouter>
         <Routes>
             <Route exact path="/home" element={<Produto/>}/>
             <Route exact path="/" element={<Produto/>}/>
         </Routes>
       </BrowserRouter>
    );
}

export default App;