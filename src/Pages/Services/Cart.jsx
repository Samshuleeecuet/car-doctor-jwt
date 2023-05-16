import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const {userInfo,logOut} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate();
    const url =` https://car-doctor-server-weld-omega.vercel.app/orders?email=${userInfo?.email}`
    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers:{
                authorization: `Barear ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setOrders(data)
            }else{
                logOut();
                navigate('/login');
            }
        })
    },[url,navigate])
    //console.log(orders);

    const handleDelete= (id)=>{
        const proceed = confirm('Are You Sure You Want to Delete');
        if(proceed){
            fetch(` https://car-doctor-server-weld-omega.vercel.app/orders/${id}`,{
                method: 'DELETE',
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Delete SuccessFully')
                    const remaining = orders.filter(order=> order._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }

    const handleConfirm = id =>{
        fetch(` https://car-doctor-server-weld-omega.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.modifiedCount>0){
                    const remaining = orders.filter(order=> order._id !== id )
                    const upadeted = orders.find(order=> order._id == id )
                    upadeted.status = 'confirm'
                    const newOrder = [upadeted, ...remaining]
                    setOrders(newOrder)
                }
            })
    }


    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl pt-10 pb-10'>All Orders</h2>
            <div className="overflow-x-auto w-full pb-10">
        <table className="table w-full ">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Update</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {
                    orders.map(order=> {
                        return <>
                                <tr key={order._id}>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={order.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{order.title}</div>
                    </div>
                </div>
                </td>
                <td>
                <span className="badge badge-ghost badge-lg">{order.price}</span>
                </td>
                <td>{order.date}</td>
                <th>
                <button className="btn btn-primary btn-xs">Update</button>
                </th>
                <th>
                {
                    order.status === 'confirm'? <span className='text-purple-400'>Confirmed</span>:
                    <button onClick={()=>handleConfirm(order._id)} className="btn btn-accent btn-xs">Please Confirm</button>
                }
                </th>
                <th>
                <button onClick={()=>handleDelete(order._id)} className="btn btn-error btn-xs">Delete</button>
                </th>
            </tr>
                        </>
                    })
                }
            
            </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;