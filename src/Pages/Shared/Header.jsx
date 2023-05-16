import React, { useContext } from 'react';
import logo from './../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const {logOut,userInfo} = useContext(AuthContext);

    const navLink = <>
    <li><NavLink to='/' className={({isActive})=> isActive?'active':'default'}>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    </>


    const handlelogout = () =>{
      logOut()
      .then()
      .catch()
    }


    return (
        <div className="navbar bg-base-100 font-bold text-[#444444]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <Link to='/' className="normal-case text-xl"><img src={logo}/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end ">
    <ul className='flex items-center gap-4'>
        {
          !userInfo && <>
          <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
          </>
        }
        {
          userInfo && <>
          <li><Link to='/cartlist'><FaShoppingCart className='text-2xl'/></Link></li>
            <li><button onClick={handlelogout} >LogOut</button></li>
            <li>
            <div className="avatar tooltip tooltip-bottom" data-tip={userInfo.displayName ? userInfo.displayName : '' }>
            <div className="w-14 mask mask-squircle " >
              <img src={userInfo.photoURL? userInfo.photoURL: ''} />
            </div>
        </div>
            </li>
          </>
        }
    </ul>
  </div>
</div>
    );
};

export default Header;