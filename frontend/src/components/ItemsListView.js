import React from 'react';

export default function ItemListView(){
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3" style={{margin:50}}>
      <div className="col">
        <div className="card">
          <img src="/Assests/item1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/Assests/item2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/Assests/item3.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/Assests/item4.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/Assests/item5.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/Assests/item6.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <button className="btn btn-outline-dark me-2" type="button">
              View Item
            </button>
          </div>
        </div>
      </div>
    </div>
        );
}