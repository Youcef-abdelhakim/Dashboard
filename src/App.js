import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcomadmin from './component/welcom/welcomadm.js';
import Modify from './component/modify/modify.js';
import Productsmng from './component/productmanagment/productmng';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Welcomadmin/>}>
        <Route path='/prduct-management' element ={<Productsmng/>} />
        <Route path='/modify' element ={<Modify/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
