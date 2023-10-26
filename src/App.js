import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componets/Home';
import Product from './Componets/Product';
import Navigation from './Navigation';
function App() {


     return (
          <div className="App">


               <BrowserRouter>
                    <Routes>
                         <Route path='/' element={<Home />} />
                         <Route path='/product' element={<Product />} />
                         <Route path='/:id' element={<Navigation />} />

                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
