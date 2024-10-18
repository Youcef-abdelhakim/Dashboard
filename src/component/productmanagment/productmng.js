import React, { useState } from "react";

const Productsmng = () => {


    const [product, setProduct] = useState ({});
    const [image, setImage] = useState(null);


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
                        <input type="text" placeholder="Product Name" id="productname" name="name" />
                    </span>

                    <span>
                        <label htmlFor="productbrand">Product Brand</label>
                        <input  type="text" placeholder="Product Brand" id="productbrand" name="brand" />
                   </span>
                   <span>
                        <label htmlFor="price">Product Price</label>
                        <input type="text" placeholder="Product Price" id="productprice" name="price" />
                    </span>

                    <span>
                        <label htmlFor="productbrand">Product state</label>
                        <input  type="number" placeholder="Product State" id="productstate" name="Quantity" />
                   </span>

                    <span>
                        <label htmlFor="category">Category</label>
                        <input type="text" placeholder="Category" id="category" name="category"/>
                    </span>

                   <span>
                        <label htmlFor="producpicture">Product picture</label>
                        <input  type="file" placeholder="Product Picture" id="productpicture" />
                   </span>

                   <span className="subbut">
                        <button className="button">Add Product</button>
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
                        <input type="text" placeholder="New Category" name="category" id="cat"/>
                    </span>
                    <span className="subbut">
                        <button className="button">Add Category</button>
                    </span>
                </form>
            </div>
            
        </section>
    )
}

export default Productsmng;