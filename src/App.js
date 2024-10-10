import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcomadmin from './component/welcomadm';
import Productsmng from './component/productmanagment/productmng';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Welcomadmin/>}>
        <Route path='/prduct-management' element ={<Productsmng/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
