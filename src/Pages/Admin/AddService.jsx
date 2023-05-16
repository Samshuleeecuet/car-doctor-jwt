import React from 'react';
import banner from './../../assets/images/services/servicecover.jpg'
import { Form, Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddService = () => {
    const handleAddService =(e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.servicetitle.value;
        const img = form.imgurl.value;
        const price = form.serviceprice.value;
        const description = form.servicedes.value;
        const newservice = {title,img,price,description}
        console.log(newservice);
        fetch(' https://car-doctor-server-weld-omega.vercel.app/services',
        {
            method: 'POST',
            headers: {
                'content-type':'Application/json'
            },
            body: JSON.stringify(newservice)
        }
        )
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: `${title} is added sucessfully`,
                  })
            }
        })
        form.reset();
    }

    return (
        <div>
            <div className='relative bg-gradient-to-r text-white font-bold from-[#151515] to-[rgba(21,21,21,0)]'>
                <img className='' src={banner} alt="" />
                <p className='absolute top-1/2 left-[40%] text-3xl'>Add New Services</p>
            </div>
            <div className="hero pt-20 pb-20 bg-base-200">
                <div className="hero widthcontrol">
                    <div className="card w-full shadow-2xl bg-base-100">
                    <Form onSubmit={handleAddService} className="card-body">
                        <div className="form-contrl">
                            <input type="text" placeholder="Service Title" name='servicetitle' className="input input-bordered w-3/5" />
                            <input type="text" name="serviceprice" placeholder='Service Price' className='input input-bordered w-3/5' id="" />
                        </div>
                        <div className="form-contrl">
                            <input type="text" placeholder="Image Url" name='imgurl' className="input input-bordered w-full" />
                        </div>
                        <div className="form-contrl">
                            <textarea type="text" name="servicedes" placeholder='Service Description' className='input input-bordered w-full' id="" />
                        </div>
                        <div className="form-contrl">
                     <button className='btn btn-success'>Add Service</button>
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

export default AddService;