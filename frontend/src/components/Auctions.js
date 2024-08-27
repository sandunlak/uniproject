import React from 'react';


export default function Auctions(){
    return (
        <div className="container py-4">
            <h1 className="mb-4 text-dark">Upcoming auctions</h1>

            <div className="row">
                <div className="col-md-3">
                    <h5>Dates</h5>
                    <ul className="list-unstyled">
                        <li><input type="radio" name="date" /> Happening now</li>
                        <li><input type="radio" name="date" /> Next 7 Days</li>
                        <li><input type="radio" name="date" /> Next 30 Days</li>
                        <li><input type="radio" name="date" /> Next 60 Days</li>
                        <li><input type="radio" name="date" /> Next 90 Days</li>
                    </ul>
                    <hr />

                    <h5>Categories</h5>
                    <ul className="list-unstyled">
                        <li><input type="radio" name="category" /> Art</li>
                        <li><input type="radio" name="category" /> Collectibles</li>
                        <li><input type="radio" name="category" /> Jewellery</li>
                    </ul>

                    <hr />

                    <h5>Location</h5>
                    <ul className="list-unstyled">
                        <li><input type="radio" name="location" /> Colombo</li>
                        <li><input type="radio" name="location" /> Negombo</li>
                    </ul>
                </div>

                <div className="col-md-8">
                    <div className="white-container">
                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/Assests/item1.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Joash's Antique Auction</h5>
                                        <p className="card-text">on 27th March 6:00 pm onwards at Joash's Place, Maharagama</p>
                                        <div className="d-flex justify-content-between">
                                            <a href="#" className="btn btn-secondary">View Auction</a>
                                            <a href="#" className="btn btn-outline-danger">Register to auction</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Repeat the same for other auction cards */}

                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/Assests/item3.jpeg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Joash's Antique Auction</h5>
                                        <p className="card-text">on 27th March 6:00 pm onwards at Joash's Place, Maharagama</p>
                                        <div className="d-flex justify-content-between">
                                            <a href="#" className="btn btn-secondary">View Auction</a>
                                            <a href="#" className="btn btn-outline-danger">Register to auction</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/Assests/item4.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Joash's Antique Auction</h5>
                                        <p className="card-text">on 27th March 6:00 pm onwards at Joash's Place, Maharagama</p>
                                        <div className="d-flex justify-content-between">
                                            <a href="#" className="btn btn-secondary">View Auction</a>
                                            <a href="#" className="btn btn-outline-danger">Register to auction</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    };


