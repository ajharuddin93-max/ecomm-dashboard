import Header from "./Header";
import React,{useState,useEffect} from "react";
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function ProductList(){
    const [products, setData] = useState([]);
    // useEffect( () => {
    //     const fetchData = async () => {
    //     let result = await fetch("http://localhost/my-project/api/list");
    //     result = await result.json();
    //     setData(result);
    //     };
    //     fetchData();
    // }, [])
    useEffect( () => {
        getData()
    }, [])
    async function Delete(id){
        let result = await fetch("http://localhost/my-project/api/delete/"+id,{
            method: "DELETE"
        })
        result = await result.json();
        getData()
        console.log(result);
    }
    async function getData(){
        let result = await fetch("http://localhost/my-project/api/list");
        result = await result.json();
        setData(result);
    }
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Product List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item)=>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img src={`http://localhost/my-project/storage/app/${item.file_path}`}
                                        width="100px"
                                        alt={item.name} />
                                    </td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={"update/"+item.id}>
                                            <span style={{ cursor: "pointer", color: "blue", marginRight: "10px" }} title="Edit Product">
                                                <FontAwesomeIcon icon={faPen} />
                                            </span>
                                        </Link>
                                        <span onClick={() => Delete(item.id)} style={{ cursor: "pointer", color: "red" }} title="Delete Product">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ProductList;