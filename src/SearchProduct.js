import Header from './Header'
import { useState } from 'react';
import {Table} from 'react-bootstrap'

function SearchProduct(){
    const [products, setData] = useState([]);
    async function search(query) {
        if (!query.trim()) {
            setData([]);  // clear results OR fetch all products
            return;
        }
        try {
            let result = await fetch("http://localhost/my-project/api/search/" + query);
            result = await result.json();
            setData(result);
        } catch (err) {
            console.error("Search failed", err);
            setData([]);
        }
    }
    return(
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Product</h1><br />   
                <input type='text' onChange={(e) => search(e.target.value)} className='form-control' placeholder='Search Products'/>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default SearchProduct;