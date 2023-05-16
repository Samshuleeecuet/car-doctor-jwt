import React, { useContext, useEffect } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import banner from './../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const CheckOut = () => {
    const {userInfo} = useContext(AuthContext)
    //console.log(userInfo)
    const serviceData = useLoaderData();
    const {_id,title,price,img}= serviceData;
    let imgurl =img;
    const handleCheckout = (e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.servicetitle.value;
        const price = form.serviceprice.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const img = imgurl;
        const checkoutData = {name,email,title,price,img,date}

        fetch(' https://car-doctor-server-weld-omega.vercel.app/checkout',{
            method: 'POST',
            headers: {
                'content-type':'Application/json'
            },
            body: JSON.stringify(checkoutData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: `Order Confirmed sucessfully`,
                  })
                  form.reset();
            }
        })

    }
    return (

        <div>
        <div className='relative bg-gradient-to-r text-white font-bold from-[#151515] to-[rgba(21,21,21,0)]'>
            <img className='' src={banner} alt="" />
            <p className='absolute top-1/2 left-[40%] text-3xl'>CheckOut</p>
        </div>
        <div className="hero pt-20 pb-20 bg-base-200">
            <div className="hero widthcontrol">
                <div className="card w-full shadow-2xl bg-base-100">
                <Form onSubmit={handleCheckout} className="card-body">
                    <div className="form-contrl">
                        <input type="text" placeholder="Service Title" value={title} name='servicetitle' className="input input-bordered w-3/5" />
                        <input type="text" name="serviceprice" value={price} placeholder='Service Price' className='input input-bordered w-3/5' id="" />
                    </div>
                    <div className="form-contrl">
                        <input type="text" placeholder="Your Name" name='name' defaultValue={userInfo?.displayName} className="input input-bordered w-3/5" />
                        <input type="email" placeholder="Your Email" name='email' value={userInfo?.email} className="input input-bordered w-3/5" />
                        <input type="date" placeholder="" name='date' className="input input-bordered w-3/5" />
                    </div>
                    <div className="form-contrl">
                        <textarea type="text" name="servicedes" placeholder='Address' className='input input-bordered w-full' id="" />
                    </div>
                    <div className="form-contrl">
                 <button className='btn btn-success' type='submit'>Order Confirmed</button>
                    </div>
                </Form>
                </div>
            </div>
            </div>
        <div>

        </div>
    </div>
    );
};

export default CheckOut;