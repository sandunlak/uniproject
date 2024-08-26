import React, { useState } from "react";
import axios from 'axios';





export default function CreateItemListing() {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...imageUrls]);
    setImages([...images, ...files]); // Store the files for upload
  };


  const [name,setName] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Arts");
  const [brand, setBrand] = useState("");
  const [features, setFeatures] = useState("");
  const [material, setMaterial] = useState("");
  const [condition, setCondition] = useState("");

  
  function sendData(e){
    e.preventDefault();
     

    const formData = new FormData();

    formData.append("name", name);
    formData.append("startingPrice", startingPrice);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("features", features);
    formData.append("material", material);
    formData.append("condition", condition);

    // Append each image file to FormData
    images.forEach((image, index) => {
      formData.append("images", image);
    });
    

    //connecting to backend and sending data(newItem object)
    axios
      .post("http://localhost:8030/item/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Item Added Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log("Form Data Submitted:", formData);
  }
    


  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-sm">
      <h1 className="text-center mb-4">Create Item Listing</h1>
      <form onSubmit={sendData}>
      <div className="row mb-4">
        <div className="col-md-6 d-flex flex-column justify-content-between w-100">
          <div className="d-flex flex-column justify-content-center align-items-center bg-secondary text-white mb-3 rounded py-5 w-100" >
            <p className="mb-2">Upload Images Here</p>
            <div className="d-flex flex-wrap justify-content-center">
              {imagePreviews.map((image, index) => (
                <div key={index} className="m-2">
                  <img
                    src={image}
                    alt={`upload-${index}`}
                    className="img-thumbnail"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    onChange={(e)=>{
                        setImages(e.target.value);
                    }}
                  />
                </div>
              ))}
              <label
                className="btn btn-light btn-sm m-2"
                style={{ width: "100px", height: "100px" }}
              >
                <span className="d-flex align-items-center justify-content-center h-100">
                  +
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="form-control-file"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>
        
      </div>
      
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setName(e.target.value);

            }}/>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Brand:</label>
            <input type="text" className="form-control" 
            onChange={(e)=>{
                setBrand(e.target.value);

            }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label className="form-label">Category:</label>
            <div className="position-relative">
              <select
                className="form-control"
                style={{ 
                    appearance: "none",
                    paddingRight: "30px" }}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="Arts" >Arts</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Jewellery" >Jewellery</option>
              </select>
              <span
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                ▼
              </span>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Features:</label>
            <input type="text" className="form-control" 
            onChange={(e)=>{
                setFeatures(e.target.value);
            }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label className="form-label">Starting Price:</label>
            <input type="number" className="form-control"
            min={1000} 
            onChange={(e)=>{
                    setStartingPrice(e.target.value);
                }}/>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Material:</label>
            <input type="text" className="form-control" 
            onChange={(e)=>{
                setMaterial(e.target.value);
            }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label className="form-label">Description:</label>
            <textarea className="form-control" rows="3"
            onChange={(e)=>{
                setDescription(e.target.value);
            }}
            ></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Condition:</label>
            <input type="text" className="form-control" 
            onChange={(e)=>{
                setCondition(e.target.value);
                }}
            
            />
          </div>
        </div>
        
      
      <div className="text-center mt-3">
        <a href="#" className="text-muted">
          Go to Seller Account
        </a>
      </div>

      <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
