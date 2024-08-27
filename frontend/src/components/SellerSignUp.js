import React, { useState } from 'react';


export  default function SellerSignUp() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        country: '',
        address: '',
        companyName: '',
        businessAddress: '',
        contactInfo: '',
        paymentMethod: '',
        bankAccountDetails: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data:', formData);
        // Handle form submission, e.g., send data to backend
      };


    return(
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center mb-4">
            <img src="/Assests/bid-master-logo-zip-file/png/logo-white.png" alt="Company Logo" className="img-fluid" 
            style={{
                width: '150px',
                
            }}
            />
          </div>
          <div className="card">
            <div className="card-header text-center">
              <h3>Seller Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Company Name (if applicable)</label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-control"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Business Address</label>
                  <input
                    type="text"
                    name="businessAddress"
                    className="form-control"
                    value={formData.businessAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Information</label>
                  <input
                    type="text"
                    name="contactInfo"
                    className="form-control"
                    value={formData.contactInfo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Payment Method</label>
                  <select
                    name="paymentMethod"
                    className="form-control"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Payment Method</option>
                    <option value="paypal">PayPal</option>
                    <option value="creditCard">Credit Card</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Bank Account Details</label>
                  <input
                    type="text"
                    name="bankAccountDetails"
                    className="form-control"
                    value={formData.bankAccountDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
}