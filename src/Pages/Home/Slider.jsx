import React from 'react';
import slide1 from './../../assets/images/homeCarousel/1.jpg';
import slide2 from './../../assets/images/homeCarousel/2.jpg';
import slide3 from './../../assets/images/homeCarousel/3.jpg';
import slide4 from './../../assets/images/homeCarousel/4.jpg';

const Slider = () => {
    return (
        <div className="carousel w-full lg:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold lg:w-96 text-white'>Affordable Price For Car Servicing</h2>
                        <p className='text-white lg:w-3/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-secondary btn-outline">Latest Projects</button>
                        </div>
                    </div>
                
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold lg:w-96 text-white'>Affordable Price For Car Servicing</h2>
                        <p className='text-white lg:w-3/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-secondary btn-outline">Latest Projects</button>
                        </div>
                    </div>
                
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold lg:w-96 text-white'>Affordable Price For Car Servicing</h2>
                        <p className='text-white lg:w-3/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-secondary btn-outline">Latest Projects</button>
                        </div>
                    </div>
                
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slide4} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold lg:w-96 text-white'>Affordable Price For Car Servicing</h2>
                        <p className='text-white lg:w-3/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-secondary btn-outline">Latest Projects</button>
                        </div>
                    </div>
                
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Slider;