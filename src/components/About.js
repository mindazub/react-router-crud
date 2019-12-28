import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function About() {

    useEffect(() => {
        fetchProducts();
    }, []);

    const [items, setItems] = useState([]);

    // const fetchProducts = ()  => {
    //     const products = JSON.parse(localStorage.getItem('products'));
    //     console.log(products);
    //     setItems(products);
    // }


    const fetchProducts = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const items = await data.json();
        console.log(items);
        setItems(items);
        localStorage.setItem('items', JSON.stringify(items));

    };

    return (
        <div>

            <Link to="/products/create" >
                <button type="button" class="btn btn-success">Add Product</button>
            </Link>
            <h1>Products</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
                <tbody>

                
                { items.map(item => (
                        <tr>
                            <td>{item.id} </td>
                            <td key="item.itemId"> {item.title}</td>
                            <td> {item.body} </td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-success">View</button>
                                    <button type="button" class="btn btn-sm btn-primary">Edit</button>
                                    <button type="button" class="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>



        </div>

    );
}

export default About;
