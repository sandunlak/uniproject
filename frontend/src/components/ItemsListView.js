import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemListView(){

  const [items, setItems] = useState([]);
  
    useEffect(() => {
        function getItems(){
            axios
        .get("http://localhost:8030/item/") 
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the items!", error);
        });
        }
        getItems();
    

        }
        , []);
      
  
    return (

      <div className="container mt-5">
        <h1 className="text-center mb-4">Items List</h1>
        <div className="row">
            {items.map((item, index) => (
                <div key={index} className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img 
                            src={item.images[0]?.data || 'placeholder-image-url'} 
                            alt={item.name} 
                            className="card-img-top" 
                            style={{
                               width: '100%',
                                height: '200px',
                                 
                                 backgroundColor: '#f0f0f0'}} 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><strong>Category:</strong> {item.category}</p>
                            <p className="card-text"><strong>Brand:</strong> {item.brand}</p>
                            <p className="card-text"><strong>Starting Price:</strong> ${item.startingPrice}</p>
                            <button className="btn btn-outline-dark ms-2" type="submit">
                                View Item
                            </button>
                            <button className="btn btn-outline-danger ms-2" type="button">
                                <i className="fas fa-heart"></i>
                            </button>
                            
                           
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );


        
      
}