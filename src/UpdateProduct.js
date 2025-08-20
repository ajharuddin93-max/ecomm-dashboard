import Header from "./Header";
import { useParams, useNavigate, data } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductList() {
}

function UpdateProduct() {
    const { id } = useParams();   // get product ID from URL
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch("http://localhost/my-project/api/product/" + id);
            result = await result.json();
            setProduct(result);
            setName(result.name)
            setPrice(result.price)
            setDescription(result.description)
            setFile(product.file)
        };
        fetchData();
    }, []);
    async function UpdateProduct(id) {
        const formData = new FormData();
        if (file) formData.append("file", file);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);
        let result = await fetch("http://localhost/my-project/api/update/"+id,{
            method: "POST",
            body: formData
        })
        result = await result.json();
        console.log(result);
        navigate("/");
    }
    return (
        <div>
            <Header />
            <h1>Update Product - {id}</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' defaultValue={product.name} /><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className='form-control' defaultValue={product.price} /><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} className='form-control' defaultValue={product.description} /><br />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className='form-control' defaultValue={product.file_path} /><br />
                {product.file_path && ( <img src={`http://localhost/my-project/storage/app/${product.file_path}`} width="100px" alt={product.name} /> )}<br /><br /> 
                <button onClick={() => navigate("/")} className="btn btn-primary">Cancel</button> &nbsp;
                <button onClick={() => UpdateProduct(product.id)} className="btn btn-primary">Update</button>
            </div>
        </div>
    );
}

export default UpdateProduct;
