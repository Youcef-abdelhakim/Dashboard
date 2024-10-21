import React, { useEffect, useState } from "react";
import axios from 'axios';
const Productsmng = () => {

    const [category, setCategory ] = useState ("");
    const [product, setProduct] = useState ({});
    const [image, setImage] = useState(null);

    const handleGetproductinfos = (e) =>{
        const {name, value, files} = e.target;
        if(name === "image" && files) {
            setImage(files[0]);
        } else{
            setProduct(prev => ({
                ...prev,
                [name] : value
            }))
        }
    }
    const handleGetCategory = (e) => {
        const  value = e.target.value;
        setCategory(value);
    }

    const handleAddProduct = async(e) => {
        const formdata = new FormData();
        formdata.append('name', product.name || "--");
        formdata.append('brand', product.brand || "--");
        formdata.append('price', product.price || "--");
        formdata.append('Quantity', product.Quantity || "--");
        formdata.append('category', product.category || "--");
        formdata.append('image', image);

        try {
            const res = await axios.post("http://localhost:8000/api/products/upload", formdata ,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // alert(res.data);
        } catch (err) {
            console.error("errore catched", err.response.data);
            alert("Error Catched:" ,err.message);
            
        }
    }

    const handleAddCategory = async(e) => {
        e.preventDefault(); 
        const newCategory = {
            category : category
        }
        try{
            const res = await axios.post("http://localhost:8000/api/category/categoryAdd", newCategory);
            alert("Succes")
        } catch(err) {
            console.error("error Catched: ", err.message);
            alert("Error");
        }
    }
    
    useEffect(() => {
        console.log(category);
    }, [category]);


    return(
        <section className="prductadd">
            <div className="title">
                <h1>
                    <span>Add</span> Products
                </h1>
            </div>

            <div className="form">
                <form>
                    <span>
                        <label htmlFor="producname">Product Name</label>
                        <input type="text" placeholder="Product Name" id="productname" name="name" onChange={handleGetproductinfos}/>
                    </span>

                    <span>
                        <label htmlFor="productbrand">Product Brand</label>
                        <input  type="text" placeholder="Product Brand" id="productbrand" name="brand" onChange={handleGetproductinfos}/>
                   </span>
                   <span>
                        <label htmlFor="price">Product Price</label>
                        <input type="text" placeholder="Product Price" id="productprice" name="price" onChange={handleGetproductinfos}/>
                    </span>

                    <span>
                        <label htmlFor="productbrand">Product state</label>
                        <input  type="number" placeholder="Product State" id="productstate" name="Quantity" onChange={handleGetproductinfos}/>
                   </span>

                    <span>
                        <label htmlFor="category">Category</label>
                        <input type="text" placeholder="Category" id="category" name="category" onChange={handleGetproductinfos}/>
                    </span>

                   <span>
                        <label htmlFor="producpicture">Product picture</label>
                        <input  type="file" placeholder="Product Picture" id="productpicture" name="image" onChange={handleGetproductinfos}/>
                   </span>

                   <span className="subbut">
                        <button className="button" onClick={handleAddProduct} >Add Product</button>
                   </span>
                </form>
            </div>

            <div className="title">
                <h1>
                    <span>Add</span> Category
                </h1>
            </div>
            <div className="form">
                <form>
                    <span>
                        <label htmlFor="cat">Category</label>
                        <input type="text" placeholder="New Category" name="category"  id="cat" onChange={handleGetCategory}/>
                    </span>
                    <span className="subbut">
                        <button className="button" onClick={handleAddCategory}>Add Category</button>
                    </span>
                </form>
            </div>
            
        </section>
    )
}

export default Productsmng;