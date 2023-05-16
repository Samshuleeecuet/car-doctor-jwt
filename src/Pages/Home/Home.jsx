import React, { useEffect } from 'react';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Service from './Service';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const serviceData = useLoaderData();
    const [servicedata, setServiceData] = useState(serviceData);
    //console.log(serviceData)
    return (
        <div>
            <Slider/>
            <AboutUs/>
            <Service serviceData={serviceData}/>
        </div>
    );
};

export default Home;