
import './style/style.css';
import axios from 'axios';
import {useState } from 'react';


const Form = () => {

    const [ name, setName ] = useState();
    const [ imageURL, setImageURL ] = useState();
    const [ price, setPrice ] = useState();
    const [description,setDescription] = useState();

    const url ="http://localhost:2812/api/";

    const addNewProduct = () => {
  

        const data = {
            name:name,
            imageURL:imageURL,
            price:price,
            description:description
        }

         axios.post(url+"products",data).then(data => {
            console.log(data);
            document.querySelector("form").reset();
        }).catch(error => {
            console.log(error);
        })

    }

    const updateProduct = () => {

        let name_p = document.querySelector("#name");
        let url_p = document.querySelector("#url");
        let desc_p = document.querySelector("#description");
        let price_p = document.querySelector("#price");
        let _id = document.querySelector("#id");

        const data = {
            name:name_p.value,
            imageURL:url_p.value,
            description:desc_p.value,
            price:price_p.value
        }
        
        axios.put(url+"products/"+_id.value,data).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }
    return(
        <div>
            <center><h2>NEW PRODUCT</h2></center>
            <form onSubmit={e => {
                e.preventDefault();
                addNewProduct();
            }}>
                <input type="text" placeholder="product name" className="card-name" onChange={event => {
                    setName(event.target.value)
                }} id="name"/>
                <input type="url" placeholder="product image link" className="card-name" onChange={event => {
                    setImageURL(event.target.value)
                }} id="url"/>
                <input type="text" placeholder="product price" className="card-name" onChange={event => {
                    setPrice(event.target.value)
                }} id="price"/>
                <textarea className="product description" placeholder="product decription" onChange={event => {
                    setDescription(event.target.value)
                }} id="description"></textarea>
                <input type ="hidden" id="id"  />
                <button type="submit" className="add-button">Add</button>
                <button type="button" className="add-button" onClick={updateProduct}>Update</button>
            </form>
        </div>
    );
}

export default Form;