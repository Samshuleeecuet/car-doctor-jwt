import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({serviceData}) => {
    return (
        <div>
            <div className='text-center space-y-4'>
            <h2 className='text-[#FF3811] font-bold'>Service</h2>
            <h2 className='text-3xl font-bold'>Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 pt-12'>
                {
                   serviceData.map(service=> {
                    return <div key={service._id} className="card w-96 bg-base-100 shadow-xl md: mx-auto">
                    <figure><img src={service.img} alt="" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{service.title}</h2>
                      <p className='text-orange-500 font-bold'>Price: ${service.price}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/services/${service._id}`}><button className="btn btn-outline"><FaArrowRight/></button></Link>
                      </div>
                    </div>
                  </div>

                   }) 
                }
            </div>
        </div>

    );
};

export default Service;