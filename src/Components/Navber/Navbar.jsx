import PropTypes from 'prop-types'; 
import Link from "../Links/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
     const[open, setOpen]=useState(false)
    const routes = [
        { path: '/', id: 1, name: 'home'  },
        { path: '/about',  id: 2, name: 'about'},
        { path: '/services',  id: 3, name: 'services' },
        { path: '/contact',id: 4, name: 'contact'  },
        { path: '/dashboard',  id: 5, name: 'dashboard'},
      ];

    return (
        <nav className='text-black first: p-6 m-3'>
           <div onClick={()=>setOpen(!open)} className='md:hidden text-3xl'>
            {
                open===true? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenu></AiOutlineMenu>
            }
           
           </div>
               <ul className={`
               md:flex absolute duration-1000 bg-yellow-400 p-6
               md:static
               
               ${open?'top-16':'-top-60' }
               
               
               `}>
               {
                routes.map(route=>  <Link key={route.id} route={route} ></Link> )
               } 
               </ul>
        </nav>
    );
};

Navbar.propTypes={
    route:PropTypes.func,  
   
}

export default Navbar;