
import { useState } from 'react';
import axios from 'axios';
import './style/style.css';

const Card = () => {
    const url ="http://localhost:2812/api/";

    const [response,setResponse] = useState([]);

    const showProduct = () => {
        axios.get(url+"products").then(data => {
            setResponse(data.data);
        }).catch(error => {
            return error;
        })
    }

    window.onload = () => {
       showProduct(); 
    }
    

    const deleteProduct = (_id) => {
        axios.delete(url+"products/"+_id).then(resp => {
            alert("deleted");
        }).catch(error => {
            alert("error deleting");
        })
    }
    

   
    const showDescription = (desc) => {
        let modal = document.querySelector(".modal")
        modal.style.display = "flex";
        document.querySelector(".span").innerText = desc;
    }


    const updateIt = (name,url,description,price,_id) => {
        let name_p = document.querySelector("#name");
        let url_p = document.querySelector("#url");
        let desc_p = document.querySelector("#description");
        let price_p = document.querySelector("#price");
        let id = document.querySelector("#id");
        name_p.value = name;
        url_p.value = url;
        desc_p.value = description;
        price_p.value = price;
        id.value = _id;
    }

    return(
        <div>
            {
            response.map(dataResponse => 
                <div className="container" key={dataResponse._id}>
                    <div className="card-image">
                        <img src={dataResponse.imageURL} alt="img"/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-caption">{dataResponse.name}</h2><br/>
                        <small>| ${dataResponse.price} | </small>
                        <button onClick={() => {
                            showDescription(dataResponse.description)
                        }}>show description</button>
                    </div>
                    <div className="card-footer">
                    <button onClick ={() => {
                        updateIt(dataResponse.name,dataResponse.imageURL,dataResponse.description, dataResponse.price, dataResponse._id);
                    }}>Update</button>
                    <button onClick={() => {
                        deleteProduct(dataResponse._id);
                    }}>Delete</button>
                    </div>
                </div>
             )
            }
        </div>
    );
}

export default Card;