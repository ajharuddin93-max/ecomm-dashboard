import Header from './Header'
import { useState } from 'react';
function AddProduct(){
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function AddProduct(){
        const formData = new FormData();
        formData.append("file",file);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);
        let result = await fetch("http://localhost/my-project/api/addProduct",{
            method: "POST",
            body: formData
        })
        // result = await result.json();
        // console.log(result);
        alert("Product Added");
    }

    return(
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <br />
                <input type='text' onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Product Name'/><br />
                <input type='file' onChange={(e) => setFile(e.target.files[0])} className='form-control' placeholder='Product Image'/><br />
                <input type='text' onChange={(e) => setPrice(e.target.value)} className='form-control' placeholder='Product Price'/><br />
                <input type='text' onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='Product description'/><br />
                <button onClick={AddProduct} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default AddProduct;