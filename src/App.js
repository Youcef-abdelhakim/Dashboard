import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcomadmin from './component/welcom/welcomadm.js';
import Modify from './component/modify/modify.js';
import Productsmng from './component/productmanagment/productmng';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './component/Home/home.js';

function App() {

  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);

  const fetchCateg = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/category/categoryget");
      console.log(res.data.message);
      setCategories(res.data.message.map(cat => cat.category));
      
    } catch(err) {
      console.error("error catched: ", err);
    }
    
  }

  const fetchPerfumes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products/demo");
      console.log(res.data.products);
      setPerfumes(res.data.products)
      } catch(err) {
        console.error("error catched", err);
      }
    }


  useEffect(() => {

    fetchCateg();
    fetchPerfumes();

  }, []);

  

  useEffect(() => {
    console.log("Updated categories:", categories);
  },[categories]); 

  // useEffect(() => {
  //   console.log("Updated perfumes:", perfumes);
  // },[perfumes]); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Welcomadmin/>}>
        <Route index element = {<Home categories = {categories} perfumes = {perfumes}/>}/>
        <Route path='/prduct-management' element ={<Productsmng categories = {categories}/>} />
        <Route path='/modify' element ={<Modify/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
