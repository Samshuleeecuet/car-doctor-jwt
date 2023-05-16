import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const serviceData = useLoaderData();
    console.log(serviceData)
    const [servicedata,setServicedata]= useState(serviceData)
    const {_id,title,img,price,description}= servicedata;
    return (
        <div className="card w-full bg-base-100 flex flex-row shadow-xl items-center">
        <div className="px-10 pt-10 pb-10 w-2/5">
            <img src={img} alt={title} className="rounded-xl" />
        </div>
        <div className="card-body items-center w-2/5">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
        </div>
        <div>
        <div className="card-actions pr-16">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Services;