import React from 'react';
import img2 from './../../assets/images/about_us/parts.jpg';
import img1 from './../../assets/images/about_us/person.jpg';

const AboutUs = () => {
    return (
        <div className='mt-20 mb-20 flex'>
            <div className='relative w-3/4 mr-16'>
                <img className='w-[521px] rounded-xl' src={img1} alt=""   />
                <img className='w-[327px] absolute border-4 border-white -bottom-10 -right-5' src={img2} alt=""   />
            </div>
            <div className='space-y-5'>
                <h2 className='text-[#FF3811] font-bold'>About Us</h2>
                <p className='font-bold text-3xl w-1/2' >We are qualified & of experience in this field</p>
                <p className='text-[#737373] w-3/4'><small>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </small></p>
                <p className='text-[#737373]  w-3/4'><small>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </small></p>
                <button className="btn bg-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;