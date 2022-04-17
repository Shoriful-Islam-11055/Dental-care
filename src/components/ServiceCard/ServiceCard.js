import React from 'react';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { name, img, description, rating } = props.services;
    return (
        <div>
        <div className="card h-100 shadow-lg">
            <img src={img} className="card-img-top cart-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fs-4 fw-bold">Name : {name}</h5>
                <h5 className="card-title">Rating : {rating}</h5>
                <p className="card-text text-start fs-5"><span className="fs-5 fw-bold ">Description:{description} </span></p>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;