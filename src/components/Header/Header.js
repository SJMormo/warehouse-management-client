import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className='d-flex justify-content-evenly align-items-center'>
                <Link className='fs-5 text-decoration-none text-black' to="/home">Home</Link>
                <Link className='fs-1 text-decoration-none text-black' to="/">Fragrance Outlet</Link>
                <Link className='fs-5 text-decoration-none text-black' to="/">Login</Link>
            </nav >
            <hr />

            {/* if user */}
            <nav className='d-flex justify-content-evenly align-items-center'>
                <Link className='fs-5 text-decoration-none text-black' to="/home">Manage Items</Link>
                <Link className='fs-5 text-decoration-none text-black' to="/">Add Items</Link>
                <Link className='fs-5 text-decoration-none text-black' to="/">My Items</Link>
            </nav>
            <hr className='mb-0' />
        </div >
    );
};

export default Header;